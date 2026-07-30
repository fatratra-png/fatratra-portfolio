import { content } from '../content'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  const { ref, revealed } = useReveal()

  return (
    <section
      id="about"
      style={{
        padding: '5rem 1.5rem',
        maxWidth: 768,
        margin: '0 auto',
      }}
    >
      <div
        ref={ref}
        className={`reveal ${revealed ? 'revealed' : ''}`}
        style={{ transitionDelay: '0s' }}
      >
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            marginBottom: '0.5rem',
          }}
        >
          About
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
            position: 'relative',
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
              position: 'absolute',
              top: -12,
              left: -12,
              width: 24,
              height: 24,
              background: '#fef08a',
              border: '3px solid #1a1a1a',
              borderRadius: '50%',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.3)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
          />
          <p style={{ fontSize: '1.1rem', color: '#333', lineHeight: 1.7 }}>{content.about}</p>
        </div>

        <div
          style={{
            marginTop: '1.5rem',
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            flexWrap: 'wrap',
            transition: 'opacity 0.6s ease 0.5s',
            opacity: revealed ? 1 : 0,
          }}
        >
          <span
            style={{
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#666',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            📍 {content.location}
          </span>
        </div>
      </div>
    </section>
  )
}
