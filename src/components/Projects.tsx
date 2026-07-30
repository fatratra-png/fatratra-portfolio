import { content } from '../content'
import { useRef, useState } from 'react'
import { useStaggeredReveal } from '../hooks/useStaggeredReveal'

const accentColors = ['#fef08a', '#bfdbfe', '#fecaca', '#d1fae5', '#e9d5ff', '#fed7aa']
const tagAccents = ['#fef08a', '#bfdbfe', '#fecaca', '#d1fae5', '#e9d5ff', '#fed7aa', '#fecdd3', '#bbf7d0']

export default function Projects() {
  const count = content.projects.length
  const { ref, revealed, delays } = useStaggeredReveal<HTMLDivElement>(count)

  return (
    <section
      id="projects"
      style={{ padding: '5rem 2rem', maxWidth: 1100, margin: '0 auto' }}
    >
      <div
        ref={ref}
        style={{
          opacity: revealed ? 1 : 0,
          transform: revealed ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
          <div
            style={{
              border: '2px solid #1a1a1a',
              boxShadow: '3px 3px 0 #1a1a1a',
              padding: '0.3rem 0.8rem',
              background: '#bfdbfe',
              fontWeight: 700,
              fontSize: '0.8rem',
              fontFamily: 'monospace',
            }}
          >
            03
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
            Work
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
          {content.projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              accent={accentColors[i % accentColors.length]}
              tagAccent={tagAccents[(i + 2) % tagAccents.length]}
              delay={delays[i]}
              revealed={revealed}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  accent,
  tagAccent,
  delay,
  revealed,
}: {
  project: (typeof content.projects)[number]
  accent: string
  tagAccent: string
  delay: number
  revealed: boolean
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    setTilt({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 14,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * -14,
    })
  }

  const resetTilt = () => setTilt({ x: 0, y: 0 })

  return (
    <div
      ref={cardRef}
      style={{
        border: '4px solid #1a1a1a',
        boxShadow: '8px 8px 0 #1a1a1a',
        padding: '1.5rem',
        background: '#fffdf9',
        transition: `all 0.1s ease, opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
        opacity: revealed ? 1 : 0,
        transform: revealed
          ? `perspective(600px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`
          : 'translateY(30px)',
      }}
      onMouseMove={handleMove}
      onMouseLeave={(e) => {
        resetTilt()
        e.currentTarget.style.boxShadow = '8px 8px 0 #1a1a1a'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '12px 12px 0 #1a1a1a'
      }}
    >
      <div
        style={{
          width: '100%',
          height: 140,
          border: '3px solid #1a1a1a',
          background: accent,
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {project.logo ? (
          <img
            src={project.logo}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '1rem' }}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
          />
        ) : (
          <span style={{ fontSize: '2.5rem', fontWeight: 800, opacity: 0.3 }}>
            {String(project.id).padStart(2, '0')}
          </span>
        )}
      </div>

      <h3
        style={{
          fontSize: '1.3rem',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          marginBottom: '0.4rem',
        }}
      >
        {project.title}
      </h3>
      <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
        {project.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.2rem' }}>
        {project.tags.filter(Boolean).map((tag) => (
          <span
            key={tag}
            style={{
              padding: '0.2rem 0.65rem',
              fontSize: '0.7rem',
              fontWeight: 700,
              border: '2px solid #1a1a1a',
              background: tagAccent,
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
              padding: '0.5rem 1.2rem',
              fontWeight: 700,
              fontSize: '0.85rem',
              border: '3px solid #1a1a1a',
              boxShadow: '4px 4px 0 #1a1a1a',
              background: '#fffdf9',
              color: '#1a1a1a',
              transition: 'all 0.1s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translate(2px,2px)'
              e.currentTarget.style.boxShadow = '2px 2px 0 #1a1a1a'
              e.currentTarget.style.background = accent
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translate(0,0)'
              e.currentTarget.style.boxShadow = '4px 4px 0 #1a1a1a'
              e.currentTarget.style.background = '#fffdf9'
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
              padding: '0.5rem 1.2rem',
              fontWeight: 700,
              fontSize: '0.85rem',
              border: '3px solid #1a1a1a',
              boxShadow: '4px 4px 0 #1a1a1a',
              background: '#fffdf9',
              color: '#1a1a1a',
              transition: 'all 0.1s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translate(2px,2px)'
              e.currentTarget.style.boxShadow = '2px 2px 0 #1a1a1a'
              e.currentTarget.style.background = tagAccent
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translate(0,0)'
              e.currentTarget.style.boxShadow = '4px 4px 0 #1a1a1a'
              e.currentTarget.style.background = '#fffdf9'
            }}
          >
            Code ↗
          </a>
        )}
      </div>
    </div>
  )
}
