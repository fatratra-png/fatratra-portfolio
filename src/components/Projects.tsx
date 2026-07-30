import { content } from '../content'
import { useStaggeredReveal } from '../hooks/useReveal'
import { useRef, useState } from 'react'

export default function Projects() {
  const count = content.projects.length
  const { ref, revealed, delays } = useStaggeredReveal<HTMLDivElement>(count)

  return (
    <section
      id="projects"
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
        <span className="section-label">03 / Projects</span>
        <h2 className="section-title">Work</h2>
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
  const [imgErr, setImgErr] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={cardRef}
      style={{
        border: '1px solid #222',
        padding: '1.5rem',
        display: 'grid',
        gridTemplateColumns: '120px 1fr',
        gap: '1.5rem',
        alignItems: 'start',
        transition: `all 0.3s ease, opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
        opacity: revealed ? 1 : 0,
        transform: revealed ? 'translateY(0)' : 'translateY(20px)',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#64ffda'; e.currentTarget.style.background = '#0f0f0f' }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#222'; e.currentTarget.style.background = 'transparent' }}
    >
      <div
        style={{
          width: 120,
          height: 120,
          border: '1px solid #333',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          background: imgErr ? '#111' : 'transparent',
        }}
      >
        {!imgErr && project.logo ? (
          <img
            src={project.logo}
            alt={`${project.title} logo`}
            style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '0.5rem' }}
            onError={() => setImgErr(true)}
          />
        ) : (
          <span style={{ fontSize: '2rem', color: '#333', fontFamily: 'JetBrains Mono, monospace' }}>
            {String(project.id).padStart(2, '0')}
          </span>
        )}
      </div>

      <div>
        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: 500,
            marginBottom: '0.5rem',
            letterSpacing: '-0.02em',
          }}
        >
          {project.title}
        </h3>
        <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
          {project.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
          {project.tags.filter(Boolean).map((tag) => (
            <span
              key={tag}
              style={{
                padding: '0.15rem 0.5rem',
                fontSize: '0.7rem',
                fontFamily: 'JetBrains Mono, monospace',
                color: '#555',
                border: '1px solid #333',
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
                fontSize: '0.8rem',
                color: '#64ffda',
                fontFamily: 'JetBrains Mono, monospace',
                borderBottom: '1px solid transparent',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderBottomColor = '#64ffda' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderBottomColor = 'transparent' }}
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
                fontSize: '0.8rem',
                color: '#888',
                fontFamily: 'JetBrains Mono, monospace',
                borderBottom: '1px solid transparent',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#f0f0f0'; e.currentTarget.style.borderBottomColor = '#666' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; e.currentTarget.style.borderBottomColor = 'transparent' }}
            >
              Code ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
