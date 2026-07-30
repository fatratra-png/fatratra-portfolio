import { content } from '../content'
import { useStaggeredReveal } from '../hooks/useStaggeredReveal'

export default function Projects() {
  const count = content.projects.length
  const { ref, revealed, delays } = useStaggeredReveal<HTMLDivElement>(count)

  return (
    <section
      id="projects"
      style={{ padding: '6rem 2rem', maxWidth: 1024, margin: '0 auto' }}
    >
      <div
        style={{
          marginBottom: '3rem',
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
          Work
        </p>
        <h2
          style={{
            fontSize: '2rem',
            fontWeight: 600,
            letterSpacing: '-0.03em',
          }}
        >
          Projects
        </h2>
      </div>

      <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {content.projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
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
  delay,
  revealed,
}: {
  project: (typeof content.projects)[number]
  delay: number
  revealed: boolean
}) {
  return (
    <div
      style={{
        border: '1px solid #eaeaea',
        borderRadius: '0.5rem',
        padding: '2rem',
        background: '#fff',
        transition: `all 0.25s ease, opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
        opacity: revealed ? 1 : 0,
        transform: revealed ? 'translateY(0)' : 'translateY(20px)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#111'
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#eaeaea'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
        <div style={{ flex: 1 }}>
          <h3
            style={{
              fontSize: '1.2rem',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              marginBottom: '0.4rem',
            }}
          >
            {project.title}
          </h3>
          <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem', maxWidth: 560 }}>
            {project.description}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
            {project.tags.filter(Boolean).map((tag) => (
              <span
                key={tag}
                style={{
                  padding: '0.15rem 0.5rem',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  color: '#888',
                  background: '#f5f5f5',
                  borderRadius: '0.2rem',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            {project.liveUrl && project.liveUrl !== 'still in progress' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: '#111',
                  borderBottom: '1px solid #ddd',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#111' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#ddd' }}
              >
                Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: '#888',
                  borderBottom: '1px solid transparent',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#111'; e.currentTarget.style.borderColor = '#ddd' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; e.currentTarget.style.borderColor = 'transparent' }}
              >
                Code
              </a>
            )}
          </div>
        </div>

        {project.logo && (
          <div
            style={{
              width: 80,
              height: 80,
              border: '1px solid #eaeaea',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.5rem',
            }}
          >
            <img
              src={project.logo}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
            />
          </div>
        )}
      </div>
    </div>
  )
}
