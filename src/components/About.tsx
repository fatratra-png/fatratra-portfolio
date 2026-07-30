import { content } from '../content'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  const { ref, revealed } = useReveal()

  return (
    <section
      id="about"
      style={{ padding: '5rem 1.5rem', maxWidth: 768, margin: '0 auto' }}
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
            background: '#fed7aa',
            fontWeight: 600,
            fontSize: '0.8rem',
          }}
        >
          01 / About
        </div>

        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            marginBottom: '1.5rem',
          }}
        >
          {content.name.split(' ').pop()}
        </h2>

        <div
          style={{
            border: '3px solid #1a1a1a',
            boxShadow: '7px 7px 0 #1a1a1a',
            padding: '2rem',
            background: '#fffdf9',
            position: 'relative',
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
              position: 'absolute',
              top: -10,
              left: -10,
              width: 20,
              height: 20,
              background: '#fef08a',
              border: '2px solid #1a1a1a',
            }}
          />
          <p style={{ fontSize: '1.05rem', color: '#333', lineHeight: 1.8 }}>
            {content.about}
          </p>
        </div>

        <div
          style={{
            marginTop: '1.5rem',
            fontFamily: 'monospace',
            fontSize: '0.85rem',
            color: '#888',
            fontWeight: 500,
            transition: 'opacity 0.6s ease 0.3s',
            opacity: revealed ? 1 : 0,
          }}
        >
          📍 {content.location}
        </div>
      </div>
    </section>
  )
}
