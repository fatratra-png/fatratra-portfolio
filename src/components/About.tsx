import { content } from '../content'

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '5rem 1.5rem',
        maxWidth: 768,
        margin: '0 auto',
      }}
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
          width: 60,
          height: 6,
          background: '#1a1a1a',
          marginBottom: '2rem',
        }}
      />

      <div
        style={{
          border: '3px solid #1a1a1a',
          boxShadow: '6px 6px 0 #1a1a1a',
          padding: '2rem',
          background: '#fffdf9',
          position: 'relative',
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
          }}
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
    </section>
  )
}
