import { content } from '../content'
import { useReveal } from '../hooks/useStaggeredReveal'

export default function Skills() {
  const { ref, revealed } = useReveal()

  return (
    <section
      id="skills"
      style={{
        padding: '6rem 2rem',
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
        <p
          style={{
            fontSize: '0.8rem',
            fontWeight: 500,
            color: '#aaa',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
          }}
        >
          Stack
        </p>
        <h2
          style={{
            fontSize: '2rem',
            fontWeight: 600,
            letterSpacing: '-0.03em',
            marginBottom: '1.5rem',
          }}
        >
          Skills & Tools
        </h2>

        <div
          style={{
            width: '3rem',
            height: '2px',
            background: '#111',
            marginBottom: '1.5rem',
          }}
        />

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {content.skills.map((skill) => (
            <div
              key={skill.name}
              style={{
                padding: '0.5rem 1rem',
                border: '1px solid #eaeaea',
                borderRadius: '0.25rem',
                background: '#fff',
                fontSize: '0.85rem',
                fontWeight: 500,
                color: '#555',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#111'
                e.currentTarget.style.color = '#111'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#eaeaea'
                e.currentTarget.style.color = '#555'
              }}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
