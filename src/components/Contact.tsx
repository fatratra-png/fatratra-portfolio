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
      style={{
        padding: '6rem 1.5rem 4rem',
        maxWidth: 768,
        margin: '0 auto',
      }}
    >
      <div
        ref={ref}
        style={{
          opacity: revealed ? 1 : 0,
          transform: revealed ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <span className="section-label">04 / Contact</span>
        <h2 className="section-title">Let's talk</h2>

        <p
          style={{
            color: '#888',
            fontSize: '0.95rem',
            lineHeight: 1.7,
            marginBottom: '2rem',
            maxWidth: 480,
          }}
        >
          No chatbot, no "thank you for your interest". Just me, reading your message and answering.
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '2rem',
          }}
        >
          <span
            onClick={copy}
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.95rem',
              color: '#64ffda',
              cursor: 'pointer',
              borderBottom: '1px solid transparent',
              transition: 'border-color 0.2s',
              position: 'relative',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderBottomColor = '#64ffda' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderBottomColor = 'transparent' }}
          >
            {content.email}
            {copied && (
              <span
                style={{
                  position: 'absolute',
                  top: -28,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  padding: '0.2rem 0.5rem',
                  background: '#64ffda',
                  color: '#0a0a0a',
                  fontSize: '0.7rem',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                }}
              >
                Copied!
              </span>
            )}
          </span>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {content.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.85rem',
                color: '#555',
                fontFamily: 'JetBrains Mono, monospace',
                borderBottom: '1px solid transparent',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#f0f0f0'; e.currentTarget.style.borderBottomColor = '#666' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#555'; e.currentTarget.style.borderBottomColor = 'transparent' }}
            >
              {s.label} ↗
            </a>
          ))}
        </div>

        <footer
          style={{
            marginTop: '4rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid #222',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.75rem',
            color: '#444',
          }}
        >
          <span>© {new Date().getFullYear()} {content.name}</span>
          <span>{content.location}</span>
        </footer>
      </div>
    </section>
  )
}
