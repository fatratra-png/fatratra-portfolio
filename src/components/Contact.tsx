import { content } from '../content'
import { useReveal } from '../hooks/useReveal'
import { useState } from 'react'

export default function Contact() {
  const { ref, revealed } = useReveal()
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(content.email).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section
      id="contact"
      style={{
        padding: '5rem 1.5rem',
        maxWidth: 768,
        margin: '0 auto',
      }}
    >
      <div
        ref={ref}
        className={`reveal ${revealed ? 'revealed' : ''}`}
      >
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            marginBottom: '0.5rem',
          }}
        >
          Contact
        </h2>

        <div
          style={{
            height: 6,
            background: '#1a1a1a',
            marginBottom: '2rem',
            transition: 'width 0.6s ease 0.3s',
            width: revealed ? 60 : 0,
          }}
        />

        <div
          style={{
            border: '3px solid #1a1a1a',
            boxShadow: '6px 6px 0 #1a1a1a',
            padding: '2rem',
            background: '#fffdf9',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translate(-3px, -3px)'
            e.currentTarget.style.boxShadow = '9px 9px 0 #1a1a1a'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translate(0, 0)'
            e.currentTarget.style.boxShadow = '6px 6px 0 #1a1a1a'
          }}
        >
          <div
            style={{
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <span
              style={{
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid #1a1a1a',
                background: '#fef08a',
                fontWeight: 700,
                fontSize: '1.2rem',
                flexShrink: 0,
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'rotate(-10deg) scale(1.1)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'rotate(0) scale(1)' }}
            >
              ✉
            </span>
            <span
              onClick={copyEmail}
              style={{
                fontWeight: 600,
                fontSize: '1.1rem',
                textDecoration: 'underline',
                textUnderlineOffset: 3,
                cursor: 'pointer',
                position: 'relative',
                transition: 'opacity 0.15s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.6' }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
            >
              {content.email}
              {copied && (
                <span
                  style={{
                    position: 'absolute',
                    top: -28,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    padding: '0.25rem 0.6rem',
                    background: '#1a1a1a',
                    color: '#fffdf9',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    border: '2px solid #1a1a1a',
                    animation: 'bounce-down 0.3s ease',
                  }}
                >
                  Copied!
                </span>
              )}
            </span>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {content.socials.map((s, i) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="neu-btn"
                style={{
                  fontSize: '0.9rem',
                  padding: '0.6rem 1.2rem',
                  transition: `all 0.1s ease, opacity 0.4s ease ${0.4 + i * 0.1}s, transform 0.4s ease ${0.4 + i * 0.1}s`,
                  opacity: revealed ? 1 : 0,
                  transform: revealed ? 'translateY(0)' : 'translateY(10px)',
                }}
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>

        <footer
          style={{
            marginTop: '4rem',
            paddingTop: '1.5rem',
            borderTop: '2px solid #1a1a1a',
            textAlign: 'center',
            color: '#888',
            fontSize: '0.85rem',
            fontWeight: 500,
            transition: 'opacity 0.6s ease 0.6s',
            opacity: revealed ? 1 : 0,
          }}
        >
          © {new Date().getFullYear()} {content.name}
        </footer>
      </div>
    </section>
  )
}
