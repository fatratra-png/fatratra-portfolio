import { content } from '../content'

export default function Contact() {
  return (
    <section
      id="contact"
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
        Contact
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
            }}
          >
            ✉
          </span>
          <a
            href={`mailto:${content.email}`}
            style={{
              fontWeight: 600,
              fontSize: '1.1rem',
              textDecoration: 'underline',
              textUnderlineOffset: 3,
            }}
          >
            {content.email}
          </a>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {content.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="neu-btn"
              style={{ fontSize: '0.9rem', padding: '0.6rem 1.2rem' }}
            >
              {s.label} ↗
            </a>
          ))}
        </div>
      </div>

      <footer
        style={{
          marginTop: '4rem',
          paddingTop: '1.5rem',
          borderTop: '2px solid #1a1a1a',
          textAlign: 'center',
          color: '#888',
          fontSize: '0.85rem',
          fontWeight: 500,
        }}
      >
        © {new Date().getFullYear()} {content.name}
      </footer>
    </section>
  )
}
