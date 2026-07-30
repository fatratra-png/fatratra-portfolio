import { content } from '../content'
import { useReveal } from '../hooks/useReveal'

const bgColors = [
  '#fef08a', '#bfdbfe', '#fecaca', '#d1fae5',
  '#e9d5ff', '#fed7aa', '#fecdd3', '#cffafe',
  '#fef3c7', '#ddd6fe',
]

export default function Skills() {
  const { ref, revealed } = useReveal()
  const skills = content.skills
  const items = [...skills, ...skills, ...skills]

  return (
    <section
      id="skills"
      style={{ padding: '5rem 1.5rem', maxWidth: 1024, margin: '0 auto' }}
    >
      <div
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
            background: '#e9d5ff',
            fontWeight: 600,
            fontSize: '0.8rem',
          }}
        >
          02 / Skills
        </div>

        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            marginBottom: '2rem',
          }}
        >
          Stack
        </h2>
      </div>

      <div
        ref={ref}
        style={{
          overflow: 'hidden',
          border: '3px solid #1a1a1a',
          boxShadow: '7px 7px 0 #1a1a1a',
          padding: '1.25rem 0',
          background: '#fffdf9',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            width: 'max-content',
            animation: revealed ? 'scroll 25s linear infinite' : 'none',
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
                  border: '2px solid #1a1a1a',
                  boxShadow: '3px 3px 0 #1a1a1a',
                  padding: '0.5rem 1rem',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  background: color,
                  color: '#1a1a1a',
                  flexShrink: 0,
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translate(-2px,-2px)'
                  e.currentTarget.style.boxShadow = '5px 5px 0 #1a1a1a'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translate(0,0)'
                  e.currentTarget.style.boxShadow = '3px 3px 0 #1a1a1a'
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
