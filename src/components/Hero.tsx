import { content } from '../content'
import { useEffect, useState } from 'react'

function useTyping(text: string, speed = 30) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!text || done) return
    let i = 0
    setDisplayed('')
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1))
      i++
      if (i >= text.length) {
        clearInterval(interval)
        setDone(true)
      }
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed, done])

  return { displayed, done }
}

export default function Hero() {
  const { displayed, done } = useTyping(content.tagline || 'Building things that live on the internet.')

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '6rem 2rem 4rem',
        maxWidth: 1024,
        margin: '0 auto',
      }}
    >
      <div>
        <p
          style={{
            fontSize: '0.85rem',
            fontWeight: 500,
            color: '#888',
            marginBottom: '1rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          {content.title}
        </p>

        <h1
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            fontWeight: 600,
            letterSpacing: '-0.035em',
            lineHeight: 0.95,
            marginBottom: '1.5rem',
            maxWidth: 720,
          }}
        >
          {content.name}
        </h1>

        <p
          style={{
            fontSize: '1.1rem',
            color: '#666',
            maxWidth: 480,
            minHeight: '1.8em',
            marginBottom: '2.5rem',
            lineHeight: 1.5,
          }}
        >
          {displayed}
          {!done && (
            <span
              style={{
                display: 'inline-block',
                width: 2,
                height: '1.2em',
                background: '#111',
                marginLeft: 2,
                verticalAlign: 'text-bottom',
                animation: 'cursor-pulse 0.8s step-end infinite',
              }}
            />
          )}
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href="#projects"
            style={{
              padding: '0.75rem 2rem',
              fontWeight: 500,
              fontSize: '0.9rem',
              background: '#111',
              color: '#fafafa',
              borderRadius: '0.25rem',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.8' }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
          >
            See my work
          </a>
          {content.resumeUrl && (
            <a
              href={content.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.75rem 2rem',
                fontWeight: 500,
                fontSize: '0.9rem',
                border: '1px solid #ddd',
                borderRadius: '0.25rem',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#111' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#ddd' }}
            >
              Resume
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
