import { content } from '../content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: '1px solid #eaeaea',
        padding: '2.5rem 2rem',
        marginTop: '2rem',
      }}
    >
      <div
        style={{
          maxWidth: 1024,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div>
          <span style={{ fontWeight: 600, fontSize: '1rem', letterSpacing: '-0.02em' }}>
            {content.name.split(' ').pop()}
          </span>
          <p style={{ fontSize: '0.85rem', color: '#aaa', marginTop: '0.25rem' }}>
            {content.tagline || 'Building things that live on the internet.'}
          </p>
        </div>

        <div style={{ textAlign: 'right' }}>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginBottom: '0.5rem' }}>
            {['About', 'Work', 'Contact'].map((s) => (
              <a
                key={s}
                href={`#${s.toLowerCase()}`}
                style={{
                  fontSize: '0.85rem',
                  color: '#888',
                  fontWeight: 500,
                  transition: 'color 0.15s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#111' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#888' }}
              >
                {s}
              </a>
            ))}
          </div>
          <p
            style={{
              fontSize: '0.8rem',
              color: '#ccc',
            }}
          >
            © {year} {content.name} · {content.location}
          </p>
        </div>
      </div>
    </footer>
  )
}
