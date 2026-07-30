import { content } from '../content'

const bgColors = [
  '#fef08a', '#bfdbfe', '#fecaca', '#d1fae5',
  '#e9d5ff', '#fed7aa', '#fecdd3', '#cffafe',
  '#fef3c7', '#ddd6fe', '#bbf7d0', '#fecaca',
]

export default function Skills() {
  const skills = content.skills
  const items = [...skills, ...skills]

  return (
    <section
      id="skills"
      style={{
        padding: '4rem 0',
        borderTop: '4px solid #1a1a1a',
        borderBottom: '4px solid #1a1a1a',
        background: '#fffdf9',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              border: '2px solid #1a1a1a',
              boxShadow: '3px 3px 0 #1a1a1a',
              padding: '0.3rem 0.8rem',
              background: '#e9d5ff',
              fontWeight: 700,
              fontSize: '0.8rem',
              fontFamily: 'monospace',
            }}
          >
            02
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
            Stack
          </h2>
        </div>
      </div>

      <div
        style={{
          borderTop: '3px solid #1a1a1a',
          borderBottom: '3px solid #1a1a1a',
          padding: '1rem 0',
          background: '#fffdf9',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            width: 'max-content',
            animation: 'marquee 20s linear infinite',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.animationPlayState = 'paused' }}
          onMouseLeave={(e) => { e.currentTarget.style.animationPlayState = 'running' }}
        >
          {items.map((skill, i) => {
            const color = bgColors[i % bgColors.length]
            return (
              <div
                key={`${skill.name}-${i}`}
                style={{
                  border: '3px solid #1a1a1a',
                  boxShadow: '4px 4px 0 #1a1a1a',
                  padding: '0.6rem 1.2rem',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  background: color,
                  color: '#1a1a1a',
                  flexShrink: 0,
                  transition: 'all 0.15s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translate(-3px,-3px)'
                  e.currentTarget.style.boxShadow = '7px 7px 0 #1a1a1a'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translate(0,0)'
                  e.currentTarget.style.boxShadow = '4px 4px 0 #1a1a1a'
                }}
              >
                {skill.name}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
