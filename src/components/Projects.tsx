import { content } from '../content'

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: '5rem 1.5rem',
        maxWidth: 1024,
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
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof content.projects)[number]
  index: number
}) {
  const accentColors = ['#fef08a', '#bfdbfe', '#fecaca', '#d1fae5', '#e9d5ff', '#fed7aa']
  const accent = accentColors[index % accentColors.length]

  return (
    <div
      style={{
        border: '3px solid #1a1a1a',
        boxShadow: '6px 6px 0 #1a1a1a',
        padding: '1.5rem',
        background: '#fffdf9',
        position: 'relative',
        transition: 'all 0.1s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translate(-2px, -2px)'
        e.currentTarget.style.boxShadow = '8px 8px 0 #1a1a1a'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translate(0, 0)'
        e.currentTarget.style.boxShadow = '6px 6px 0 #1a1a1a'
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
        }}
      >
        {String(project.id).padStart(2, '0')}
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
