import { content } from '../content'

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '6rem 1.5rem 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: -120,
          right: -120,
          width: 360,
          height: 360,
          borderRadius: '50%',
          background: '#fef08a',
          border: '3px solid #1a1a1a',
          opacity: 0.6,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -80,
          left: -80,
          width: 260,
          height: 260,
          borderRadius: '50%',
          background: '#bfdbfe',
          border: '3px solid #1a1a1a',
          opacity: 0.6,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          maxWidth: 640,
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(3rem, 10vw, 5.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            marginBottom: '1rem',
          }}
        >
          {content.name}
        </h1>

        <div
          style={{
            display: 'inline-block',
            border: '3px solid #1a1a1a',
            boxShadow: '5px 5px 0 #1a1a1a',
            padding: '0.5rem 1.5rem',
            marginBottom: '1.5rem',
            background: '#1a1a1a',
            color: '#fffdf9',
            fontWeight: 600,
            fontSize: '1.1rem',
            letterSpacing: '0.02em',
          }}
        >
          {content.title}
        </div>

        <p
          style={{
            fontSize: '1.15rem',
            color: '#4a4a4a',
            maxWidth: 480,
            margin: '0 auto 2rem',
          }}
        >
          {content.tagline}
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#projects" className="neu-btn">
            See my work ↓
          </a>
          {content.resumeUrl && (
            <a href={content.resumeUrl} target="_blank" rel="noopener noreferrer" className="neu-btn">
              Resume ↗
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
