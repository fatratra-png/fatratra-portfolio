import { content } from '../content'
import { useEffect, useState } from 'react'

function useTyping(text: string, speed = 40) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!text) return
    let i = 0
    setDisplayed('')
    setDone(false)
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1))
      i++
      if (i >= text.length) {
        clearInterval(interval)
        setDone(true)
      }
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])

  return { displayed, done }
}

export default function Hero() {
  const { displayed, done } = useTyping(content.tagline || 'Build what matters.', 35)

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '6rem 1.5rem 4rem',
        maxWidth: 1024,
        margin: '0 auto',
      }}
    >
      <div style={{ marginBottom: '2rem' }}>
        <span
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.8rem',
            color: '#64ffda',
            border: '1px solid #64ffda',
            padding: '0.2rem 0.6rem',
            borderRadius: 2,
          }}
        >
          Solo · 1 dev
        </span>
      </div>

      <h1
        style={{
          fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          fontWeight: 600,
          letterSpacing: '-0.04em',
          lineHeight: 0.95,
          marginBottom: '1.5rem',
          maxWidth: 720,
        }}
      >
        {content.name}
      </h1>

      <p
        style={{
          fontSize: '1.15rem',
          color: '#666',
          maxWidth: 520,
          marginBottom: '0.5rem',
          minHeight: '1.8em',
          fontFamily: 'JetBrains Mono, monospace',
        }}
      >
        {displayed}
        {!done && (
          <span
            style={{
              display: 'inline-block',
              width: 2,
              height: '1.1em',
              background: '#64ffda',
              marginLeft: 2,
              verticalAlign: 'text-bottom',
              animation: 'typing-cursor 0.8s step-end infinite',
            }}
          />
        )}
      </p>

      <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: '#555' }}>
        {content.title}
      </p>

      <div
        style={{
          marginTop: '3rem',
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
        }}
      >
        <a
          href="#projects"
          style={{
            padding: '0.7rem 1.5rem',
            border: '1px solid #64ffda',
            color: '#64ffda',
            fontWeight: 500,
            fontSize: '0.9rem',
            transition: 'all 0.2s',
            fontFamily: 'JetBrains Mono, monospace',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#64ffda'
            e.currentTarget.style.color = '#0a0a0a'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = '#64ffda'
          }}
        >
          See my work →
        </a>
        {content.resumeUrl && (
          <a
            href={content.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.7rem 1.5rem',
              border: '1px solid #333',
              color: '#888',
              fontWeight: 400,
              fontSize: '0.9rem',
              transition: 'all 0.2s',
              fontFamily: 'JetBrains Mono, monospace',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#888'; e.currentTarget.style.color = '#f0f0f0' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.color = '#888' }}
          >
            Resume ↗
          </a>
        )}
      </div>

      <div
        style={{
          marginTop: 'auto',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.8rem',
          color: '#444',
        }}
      >
        {content.location}
      </div>
    </section>
  )
}
