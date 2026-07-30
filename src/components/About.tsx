import { content } from '../content'
import { useState } from 'react'
import { useReveal } from '../hooks/useStaggeredReveal'

export default function About() {
  const { ref, revealed } = useReveal()
  const [hover, setHover] = useState(false)

  return (
    <section
      id="about"
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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1rem',
          }}
        >
          <div
            style={{
              border: '2px solid #1a1a1a',
              boxShadow: '3px 3px 0 #1a1a1a',
              padding: '0.3rem 0.8rem',
              background: '#fed7aa',
              fontWeight: 700,
              fontSize: '0.8rem',
              fontFamily: 'monospace',
            }}
          >
            01
          </div>
          <h2
            style={{
              fontSize: '2.2rem',
              fontWeight: 800,
              letterSpacing: '-0.03em',
            }}
          >
            About
          </h2>
        </div>

        <div
          style={{
            border: '4px solid #1a1a1a',
            boxShadow: hover ? '10px 10px 0 #1a1a1a' : '8px 8px 0 #1a1a1a',
            padding: '2rem',
            background: '#fffdf9',
            position: 'relative',
            transition: 'all 0.2s ease',
            transform: hover ? 'translate(-3px,-3px)' : 'translate(0,0)',
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div
            style={{
              position: 'absolute',
              top: -12,
              left: -12,
              width: 24,
              height: 24,
              background: '#fef08a',
              border: '3px solid #1a1a1a',
              transform: 'rotate(45deg)',
              transition: 'transform 0.3s ease',
            }}
          />
          <p style={{ fontSize: '1.05rem', color: '#333', lineHeight: 1.8 }}>{content.about}</p>
          <div
            style={{
              marginTop: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'monospace',
              fontSize: '0.85rem',
              color: '#888',
              fontWeight: 500,
            }}
          >
            <span style={{ width: 8, height: 8, background: '#10b981', borderRadius: '50%', display: 'inline-block' }} />
            {content.location}
          </div>
        </div>
      </div>
    </section>
  )
}
