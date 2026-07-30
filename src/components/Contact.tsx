import { content } from '../content'
import { useReveal } from '../hooks/useReveal'
import { useState } from 'react'

export default function Contact() {
  const { ref, revealed } = useReveal()
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(content.email).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section
      id="contact"
      style={{ padding: '5rem 1.5rem 4rem', maxWidth: 768, margin: '0 auto' }}
    >
      <div
        ref={ref}
        style={{
          opacity: revealed ? 1 : 0,
          transform: revealed ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            border: '2px solid #1a1a1a',
            boxShadow: '3px 3px 0 #1a1a1a',
            padding: '0.3rem 0.8rem',
            marginBottom: '1rem',
            background: '#fecaca',
            fontWeight: 600,
            fontSize: '0.8rem',
          }}
        >
          04 / Contact
        </div>

        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            marginBottom: '1rem',
          }}
        >
          Let's talk
        </h2>

        <p style={{ color: '#666', fontSize: '1rem', marginBottom: '2rem' }}>
          No chatbot, no "thank you for your interest". Just me.
        </p>

        <div
          style={{
            border: '3px solid #1a1a1a',
            boxShadow: '7px 7px 0 #1a1a1a',
            padding: '2rem',
            background: '#fffdf9',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translate(-3px,-3px)'
            e.currentTarget.style.boxShadow = '10px 10px 0 #1a1a1a'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translate(0,0)'
            e.currentTarget.style.boxShadow = '7px 7px 0 #1a1a1a'
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
              }}
            >
              ✉
            </span>
            <span
              onClick={copy}
              style={{
                fontWeight: 600,
                fontSize: '1.05rem',
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
                  }}
                >
                  Copied!
                </span>
              )}
            </span>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {content.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.5rem 1.2rem',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  border: '2px solid #1a1a1a',
                  boxShadow: '3px 3px 0 #1a1a1a',
                  background: '#fffdf9',
                  transition: 'all 0.1s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translate(2px,2px)'
                  e.currentTarget.style.boxShadow = '1px 1px 0 #1a1a1a'
                  e.currentTarget.style.background = '#bfdbfe'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translate(0,0)'
                  e.currentTarget.style.boxShadow = '3px 3px 0 #1a1a1a'
                  e.currentTarget.style.background = '#fffdf9'
                }}
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>

        <footer
          style={{
            marginTop: '3rem',
            paddingTop: '1.5rem',
            borderTop: '3px solid #1a1a1a',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
            fontWeight: 600,
            fontSize: '0.85rem',
            color: '#888',
          }}
        >
          <span>© {new Date().getFullYear()} {content.name}</span>
          <span>{content.location}</span>
        </footer>
      </div>
    </section>
  )
}
