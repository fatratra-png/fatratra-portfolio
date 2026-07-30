import { content } from '../content'
import { useReveal } from '../hooks/useStaggeredReveal'

export default function About() {
  const { ref, revealed } = useReveal()

  return (
    <section
      id="about"
      style={{
        padding: '6rem 2rem',
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
          About
        </p>

        <h2
          style={{
            fontSize: '2rem',
            fontWeight: 600,
            letterSpacing: '-0.03em',
            marginBottom: '1.5rem',
          }}
        >
          {content.name.split(' ').pop()}
        </h2>

        <div
          style={{
            width: '3rem',
            height: '2px',
            background: '#111',
            marginBottom: '1.5rem',
          }}
        />

        <p
          style={{
            color: '#555',
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
            fontSize: '0.85rem',
            color: '#999',
          }}
        >
          {content.location}
        </div>
      </div>
    </section>
  )
}
