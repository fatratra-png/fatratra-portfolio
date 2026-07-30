import { content } from '../content'

export default function Skills() {
  return (
    <section
      id="skills"
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
        Skills
      </h2>

      <div
        style={{
          width: 60,
          height: 6,
          background: '#1a1a1a',
          marginBottom: '2rem',
        }}
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
        {content.skills.map((skill) => (
          <div
            key={skill.name}
            style={{
              border: '2px solid #1a1a1a',
              boxShadow: '3px 3px 0 #1a1a1a',
              padding: '0.5rem 1rem',
              fontWeight: 600,
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: '#fffdf9',
              transition: 'all 0.1s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translate(2px, 2px)'
              e.currentTarget.style.boxShadow = '1px 1px 0 #1a1a1a'
              e.currentTarget.style.background = skill.color
              e.currentTarget.style.color = parseInt(skill.color.replace('#', ''), 16) > 0xcccccc ? '#1a1a1a' : '#fff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translate(0, 0)'
              e.currentTarget.style.boxShadow = '3px 3px 0 #1a1a1a'
              e.currentTarget.style.background = '#fffdf9'
              e.currentTarget.style.color = '#1a1a1a'
            }}
          >
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: skill.color,
                border: '2px solid #1a1a1a',
                flexShrink: 0,
              }}
            />
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  )
}
