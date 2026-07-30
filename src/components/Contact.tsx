import { content } from '../content'
import { useReveal } from '../hooks/useStaggeredReveal'
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
        padding: '5rem 2rem',
        maxWidth: 900,
        margin: '0 auto',
      }}
    >
      <div
        ref={ref}
        style={{
          opacity: revealed ? 1 : 0,
          transform: revealed ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <div
            style={{
              border: '2px solid #1a1a1a',
              boxShadow: '3px 3px 0 #1a1a1a',
              padding: '0.3rem 0.8rem',
              background: '#fecaca',
              fontWeight: 700,
              fontSize: '0.8rem',
              fontFamily: 'monospace',
            }}
          >
            04
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
            Contact
          </h2>
        </div>

        <p style={{ color: '#666', fontSize: '1rem', marginBottom: '2rem', maxWidth: 500 }}>
          Want to work together or just say hi? Drop me a message — I actually reply.
        </p>

        <div
          style={{
            border: '4px solid #1a1a1a',
            boxShadow: '8px 8px 0 #1a1a1a',
            padding: '2rem',
            background: '#fffdf9',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translate(-3px,-3px)'
            e.currentTarget.style.boxShadow = '11px 11px 0 #1a1a1a'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translate(0,0)'
            e.currentTarget.style.boxShadow = '8px 8px 0 #1a1a1a'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.5rem',
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '3px solid #1a1a1a',
                background: '#fef08a',
                fontWeight: 700,
                fontSize: '1.4rem',
                flexShrink: 0,
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'rotate(-10deg) scale(1.1)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'rotate(0) scale(1)' }}
            >
              ✉
            </div>
            <div>
              <span
                onClick={copy}
                style={{
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  position: 'relative',
                  textDecoration: 'underline',
                  textUnderlineOffset: 4,
                  textDecorationThickness: 2,
                }}
              >
                {content.email}
                {copied && (
                  <span
                    style={{
                      position: 'absolute',
                      top: -30,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      padding: '0.25rem 0.7rem',
                      background: '#1a1a1a',
                      color: '#fffdf9',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      whiteSpace: 'nowrap',
                      border: '2px solid #1a1a1a',
                    }}
                  >
                    Copied!
                  </span>
                )}
              </span>
              <div style={{ fontSize: '0.8rem', color: '#999', marginTop: '0.15rem' }}>
                Click to copy
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {content.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.6rem 1.4rem',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  border: '3px solid #1a1a1a',
                  boxShadow: '4px 4px 0 #1a1a1a',
                  background: '#fffdf9',
                  transition: 'all 0.1s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translate(2px,2px)'
                  e.currentTarget.style.boxShadow = '2px 2px 0 #1a1a1a'
                  e.currentTarget.style.background = '#bfdbfe'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translate(0,0)'
                  e.currentTarget.style.boxShadow = '4px 4px 0 #1a1a1a'
                  e.currentTarget.style.background = '#fffdf9'
                }}
              >
                {s.label}
                <span style={{ fontSize: '0.8rem' }}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
