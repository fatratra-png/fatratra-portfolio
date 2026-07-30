import { content } from '../content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: '4px solid #1a1a1a',
        background: '#1a1a1a',
        color: '#fffdf9',
        padding: '2.5rem 2rem',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
        }}
      >
        <div>
          <div
            style={{
              fontWeight: 800,
              fontSize: '1.3rem',
              border: '2px solid #fffdf9',
              boxShadow: '3px 3px 0 #fffdf9',
              padding: '0.3rem 0.8rem',
              display: 'inline-block',
              marginBottom: '1rem',
              background: '#fef08a',
              color: '#1a1a1a',
            }}
          >
            {content.name.split(' ').pop()}.
          </div>
          <p style={{ fontSize: '0.9rem', color: '#888', maxWidth: 280, lineHeight: 1.6 }}>
            {content.tagline || 'Building things that live on the internet.'}
          </p>
        </div>

        <div>
          <h4
            style={{
              fontWeight: 700,
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#64ffda',
              marginBottom: '0.75rem',
            }}
          >
            Navigation
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {['About', 'Skills', 'Work', 'Contact'].map((s) => (
              <a
                key={s}
                href={`#${s.toLowerCase()}`}
                style={{
                  color: '#aaa',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  transition: 'color 0.15s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#fffdf9' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#aaa' }}
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4
            style={{
              fontWeight: 700,
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#64ffda',
              marginBottom: '0.75rem',
            }}
          >
            Connect
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {content.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#aaa',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  transition: 'color 0.15s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#fffdf9' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#aaa' }}
              >
                {s.label} ↗
              </a>
            ))}
            <a
              href={`mailto:${content.email}`}
              style={{
                color: '#aaa',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'color 0.15s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#fffdf9' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#aaa' }}
            >
              Email
            </a>
          </div>
        </div>

        <div>
          <h4
            style={{
              fontWeight: 700,
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#64ffda',
              marginBottom: '0.75rem',
            }}
          >
            Location
          </h4>
          <p style={{ color: '#aaa', fontSize: '0.9rem', fontFamily: 'monospace' }}>
            {content.location}
          </p>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1100,
          margin: '2rem auto 0',
          paddingTop: '1.5rem',
          borderTop: '1px solid #333',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
          fontSize: '0.8rem',
          color: '#666',
          fontFamily: 'monospace',
        }}
      >
        <span>© {year} {content.name}</span>
        <span>Hand-made with ❤️</span>
      </div>
    </footer>
  )
}
