import { content } from '../content'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  const { ref, revealed } = useReveal()

  return (
    <section
      id="about"
      style={{
        padding: '6rem 1.5rem',
        maxWidth: 768,
        margin: '0 auto',
      }}
    >
      <div
        ref={ref}
        style={{
          opacity: revealed ? 1 : 0,
          transform: revealed ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <span className="section-label">01 / About</span>
        <h2 className="section-title">{content.name.split(' ').pop()}</h2>
        <p
          style={{
            color: '#888',
            fontSize: '1.05rem',
            lineHeight: 1.8,
            maxWidth: 600,
          }}
        >
          {content.about}
        </p>
        <div
          style={{
            marginTop: '2rem',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.8rem',
            color: '#555',
          }}
        >
          {content.location}
        </div>
      </div>
    </section>
  )
}
