import { content } from '../content'
import { useStaggeredReveal } from '../hooks/useReveal'
import { useRef, useState } from 'react'

const fallbackColors = ['#fef08a', '#bfdbfe', '#fecaca', '#d1fae5', '#e9d5ff', '#fed7aa']

export default function Projects() {
  const projectCount = content.projects.length
  const { ref, revealed, delays } = useStaggeredReveal<HTMLDivElement>(projectCount)

  return (
    <section
      id="projects"
      style={{
        padding: '5rem 1.5rem',
        maxWidth: 1024,
        margin: '0 auto',
      }}
    >
      <div ref={ref} className={`reveal-stagger ${revealed ? 'revealed' : ''}`}>
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            marginBottom: '0.5rem',
          }}
        >
          Projects
        </h2>

        <div
          style={{
            width: 60,
            height: 6,
            background: '#1a1a1a',
            marginBottom: '2rem',
          }}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {content.projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
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
  index,
  delay,
  revealed,
}: {
  project: (typeof content.projects)[number]
  index: number
  delay: number
  revealed: boolean
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const [imgErr, setImgErr] = useState(false)
  const accent = fallbackColors[index % fallbackColors.length]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: x * 10, y: y * -10 })
  }

  const resetTilt = () => setTilt({ x: 0, y: 0 })

  return (
    <div
      ref={cardRef}
      style={{
        border: '3px solid #1a1a1a',
        boxShadow: '6px 6px 0 #1a1a1a',
        padding: '1.5rem',
        background: '#fffdf9',
        position: 'relative',
        transition: `all 0.1s ease, transform 0.6s ease ${delay}s, opacity 0.6s ease ${delay}s`,
        transform: revealed
          ? `perspective(600px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`
          : 'translateY(30px)',
        opacity: revealed ? 1 : 0,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={(e) => {
        resetTilt()
        e.currentTarget.style.transform = 'translate(0, 0)'
        e.currentTarget.style.boxShadow = '6px 6px 0 #1a1a1a'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translate(-2px, -2px)'
        e.currentTarget.style.boxShadow = '8px 8px 0 #1a1a1a'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: -10,
          right: -10,
          width: 32,
          height: 32,
          background: accent,
          border: '3px solid #1a1a1a',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          fontSize: '0.75rem',
          transition: 'transform 0.2s ease',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.2) rotate(10deg)' }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1) rotate(0deg)' }}
      >
        {String(project.id).padStart(2, '0')}
      </div>

      <div
        style={{
          width: '100%',
          height: 120,
          border: '2px solid #1a1a1a',
          marginBottom: '1rem',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: imgErr ? accent : '#fffdf9',
          transition: 'background 0.2s',
        }}
      >
        {!imgErr ? (
          <img
            src={project.logo}
            alt={`${project.title} logo`}
            style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '0.5rem' }}
            onError={() => setImgErr(true)}
          />
        ) : (
          <span style={{ fontWeight: 700, fontSize: '2rem', color: '#1a1a1a', opacity: 0.3 }}>
            {project.title.charAt(0)}
          </span>
        )}
      </div>

      <h3
        style={{
          fontSize: '1.35rem',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          marginBottom: '0.75rem',
          paddingRight: '1.5rem',
        }}
      >
        {project.title}
      </h3>

      <p
        style={{
          color: '#555',
          fontSize: '0.95rem',
          lineHeight: 1.6,
          marginBottom: '1.25rem',
        }}
      >
        {project.description}
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.4rem',
          marginBottom: '1.25rem',
        }}
      >
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: '0.2rem 0.6rem',
              fontSize: '0.75rem',
              fontWeight: 600,
              border: '2px solid #1a1a1a',
              background: accent,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#1a1a1a'
              e.currentTarget.style.color = accent
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = accent
              e.currentTarget.style.color = '#1a1a1a'
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="neu-btn"
          style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
        >
          Live ↗
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="neu-btn"
          style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
        >
          Code ↗
        </a>
      </div>
    </div>
  )
}
