import { content } from '../content'
import { useReveal } from '../hooks/useReveal'

const slugRules: [string, string][] = [
  ['html', 'html5'],
  ['css', 'css3'],
  ['javascript', 'javascript'],
  ['typescript', 'typescript'],
  ['react', 'react'],
  ['tailwind', 'tailwindcss'],
  ['java', 'java'],
  ['postgresql', 'postgresql'],
  ['git', 'git'],
]

function getSlug(name: string): string {
  const key = name.toLowerCase().replace(/[\s|/]/g, '')
  for (const [match, slug] of slugRules) {
    if (key.includes(match)) return slug
  }
  return key
}

export default function Skills() {
  const { ref, revealed } = useReveal()
  const skills = content.skills
  const items = [...skills, ...skills, ...skills]

  return (
    <section
      id="skills"
      style={{ padding: '6rem 1.5rem', maxWidth: 1024, margin: '0 auto' }}
    >
      <div
        style={{
          marginBottom: '3rem',
          opacity: revealed ? 1 : 0,
          transform: revealed ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <span className="section-label">02 / Skills</span>
        <h2 className="section-title">Stack</h2>
      </div>

      <div
        ref={ref}
        style={{
          overflow: 'hidden',
          borderTop: '1px solid #222',
          borderBottom: '1px solid #222',
          padding: '1.5rem 0',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '3rem',
            width: 'max-content',
            animation: revealed ? 'scroll 30s linear infinite' : 'none',
            alignItems: 'center',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.animationPlayState = 'paused' }}
          onMouseLeave={(e) => { e.currentTarget.style.animationPlayState = 'running' }}
        >
          {items.map((skill, i) => {
            const slug = getSlug(skill.name)
            const iconUrl = `https://cdn.simpleicons.org/${slug}/${skill.color.replace('#', '')}`

            return (
              <div
                key={`${skill.name}-${i}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  flexShrink: 0,
                  opacity: 0.6,
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '1' }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.6' }}
              >
                <img
                  src={iconUrl}
                  alt={skill.name}
                  style={{ width: 28, height: 28, objectFit: 'contain', flexShrink: 0 }}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none'
                  }}
                />
                <span
                  style={{
                    fontWeight: 400,
                    fontSize: '0.95rem',
                    color: '#f0f0f0',
                    whiteSpace: 'nowrap',
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                >
                  {skill.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
