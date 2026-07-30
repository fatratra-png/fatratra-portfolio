import { content } from '../content'
import { useStaggeredReveal } from '../hooks/useReveal'

const accentColors = ['#fef08a', '#bfdbfe', '#fecaca', '#d1fae5', '#e9d5ff', '#fed7aa']

export default function Projects() {
  const count = content.projects.length
  const { ref, revealed, delays } = useStaggeredReveal<HTMLDivElement>(count)

  return (
    <section
      id="projects"
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
            background: '#bfdbfe',
            fontWeight: 600,
            fontSize: '0.8rem',
          }}
        >
          03 / Projects
        </div>

        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            marginBottom: '2rem',
          }}
        >
          Work
        </h2>
      </div>

      <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {content.projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            accent={accentColors[i % accentColors.length]}
            delay={delays[i]}
            revealed={revealed}
          />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  accent,
  delay,
  revealed,
}: {
  project: (typeof content.projects)[number]
  accent: string
  delay: number
  revealed: boolean
}) {
  return (
    <div
      style={{
        border: '3px solid #1a1a1a',
        boxShadow: '7px 7px 0 #1a1a1a',
        padding: '1.5rem',
        background: '#fffdf9',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '1rem',
        transition: `all 0.2s ease, opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
        opacity: revealed ? 1 : 0,
        transform: revealed ? 'translateY(0)' : 'translateY(20px)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translate(-3px,-3px)'
        e.currentTarget.style.boxShadow = '10px 10px 0 #1a1a1a'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translate(0,0)'
        e.currentTarget.style.boxShadow = '7px 7px 0 #1a1a1a'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
        <div
          style={{
            width: 32,
            height: 32,
            background: accent,
            border: '2px solid #1a1a1a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: '0.8rem',
            flexShrink: 0,
          }}
        >
          {String(project.id).padStart(2, '0')}
        </div>

        <div style={{ flex: 1 }}>
          <h3
            style={{
              fontSize: '1.3rem',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: '0.4rem',
            }}
          >
            {project.title}
          </h3>
          <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
            {project.description}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
            {project.tags.filter(Boolean).map((tag) => (
              <span
                key={tag}
                style={{
                  padding: '0.2rem 0.6rem',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  border: '2px solid #1a1a1a',
                  background: accent,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {project.liveUrl && project.liveUrl !== 'still in progress' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.4rem 1rem',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  border: '2px solid #1a1a1a',
                  boxShadow: '3px 3px 0 #1a1a1a',
                  background: '#fffdf9',
                  color: '#1a1a1a',
                  transition: 'all 0.1s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translate(2px,2px)'
                  e.currentTarget.style.boxShadow = '1px 1px 0 #1a1a1a'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translate(0,0)'
                  e.currentTarget.style.boxShadow = '3px 3px 0 #1a1a1a'
                }}
              >
                Live ↗
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.4rem 1rem',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  border: '2px solid #1a1a1a',
                  boxShadow: '3px 3px 0 #1a1a1a',
                  background: accent,
                  color: '#1a1a1a',
                  transition: 'all 0.1s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translate(2px,2px)'
                  e.currentTarget.style.boxShadow = '1px 1px 0 #1a1a1a'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translate(0,0)'
                  e.currentTarget.style.boxShadow = '3px 3px 0 #1a1a1a'
                }}
              >
                Code ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
