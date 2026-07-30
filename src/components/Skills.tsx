import { content } from '../content'
import { useReveal } from '../hooks/useReveal'

const iconSlug: Record<string, string> = {
  html: 'html5',
  css: 'css3',
  javascript: 'javascript',
  typescript: 'typescript',
  reactjs: 'react',
  tailwindcss: 'tailwindcss',
  java: 'java',
  postgresql: 'postgresql',
  git: 'git',
}

export default function Skills() {
  const { ref, revealed } = useReveal()
  const skills = content.skills

  const items = [...skills, ...skills, ...skills]

  return (
    <section
      id="skills"
      style={{
        padding: '5rem 1.5rem',
        maxWidth: 768,
        margin: '0 auto',
      }}
    >
      <div
        ref={ref}
        style={{
          opacity: revealed ? 1 : 0,
          transform: revealed ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
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
            height: 6,
            background: '#1a1a1a',
            marginBottom: '2rem',
            transition: 'width 0.6s ease 0.3s',
            width: revealed ? 60 : 0,
          }}
        />

        <div
          style={{
            overflow: 'hidden',
            border: '3px solid #1a1a1a',
            boxShadow: '5px 5px 0 #1a1a1a',
            padding: '1.25rem 0',
            background: '#fffdf9',
            maskImage: 'linear-gradient(to right, transparent 0, #000 5%, #000 95%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0, #000 5%, #000 95%, transparent 100%)',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '2rem',
              width: 'max-content',
              animation: revealed ? 'scroll 20s linear infinite' : 'none',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.animationPlayState = 'paused' }}
            onMouseLeave={(e) => { e.currentTarget.style.animationPlayState = 'running' }}
          >
            {items.map((skill, i) => {
              const key = skill.name.toLowerCase().replace(/[\s|/]/g, '')
              const slug = iconSlug[key] || key
              const iconUrl = `https://cdn.simpleicons.org/${slug}/${skill.color.replace('#', '')}`

              return (
                <div
                  key={`${skill.name}-${i}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    padding: '0.4rem 0.8rem',
                    border: '2px solid #1a1a1a',
                    boxShadow: '3px 3px 0 #1a1a1a',
                    background: '#fffdf9',
                    transition: 'all 0.15s ease',
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = skill.color
                    e.currentTarget.style.transform = 'translate(-2px, -2px)'
                    e.currentTarget.style.boxShadow = '5px 5px 0 #1a1a1a'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#fffdf9'
                    e.currentTarget.style.transform = 'translate(0, 0)'
                    e.currentTarget.style.boxShadow = '3px 3px 0 #1a1a1a'
                  }}
                >
                  <img
                    src={iconUrl}
                    alt={skill.name}
                    style={{ width: 28, height: 28, objectFit: 'contain', flexShrink: 0 }}
                  />
                  <span style={{ fontWeight: 600, fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
                    {skill.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
