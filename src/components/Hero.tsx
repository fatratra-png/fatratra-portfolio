import { content } from '../content'
import { useEffect, useState } from 'react'
import { useReveal } from '../hooks/useReveal'

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
  const { displayed, done } = useTyping(content.tagline || 'Building things that live on the internet.')
  const { ref, revealed } = useReveal()

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
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: -80,
          right: -80,
          width: 280,
          height: 280,
          borderRadius: '50%',
          background: '#fef08a',
          border: '3px solid #1a1a1a',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -60,
          left: -60,
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: '#bfdbfe',
          border: '3px solid #1a1a1a',
        }}
      />

      <div
        ref={ref}
        style={{
          position: 'relative',
          zIndex: 1,
          opacity: revealed ? 1 : 0,
          transform: revealed ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            border: '2px solid #1a1a1a',
            boxShadow: '3px 3px 0 #1a1a1a',
            padding: '0.3rem 0.8rem',
            marginBottom: '1.5rem',
            background: '#1a1a1a',
            color: '#fffdf9',
            fontWeight: 600,
            fontSize: '0.8rem',
            fontFamily: 'monospace',
          }}
        >
          {content.title}
        </div>

        <h1
          style={{
            fontSize: 'clamp(2.8rem, 10vw, 5.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 0.92,
            marginBottom: '1.5rem',
            maxWidth: 720,
          }}
        >
          {content.name}
        </h1>

        <p
          style={{
            fontSize: '1.15rem',
            color: '#555',
            maxWidth: 520,
            minHeight: '1.8em',
            marginBottom: '2rem',
          }}
        >
          {displayed}
          {!done && (
            <span
              style={{
                display: 'inline-block',
                width: 3,
                height: '1.2em',
                background: '#1a1a1a',
                marginLeft: 3,
                verticalAlign: 'text-bottom',
                animation: 'typing-cursor 0.8s step-end infinite',
              }}
            />
          )}
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href="#projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              fontWeight: 600,
              fontSize: '1rem',
              border: '3px solid #1a1a1a',
              boxShadow: '5px 5px 0 #1a1a1a',
              background: '#fef08a',
              color: '#1a1a1a',
              transition: 'all 0.1s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translate(2px,2px)'
              e.currentTarget.style.boxShadow = '3px 3px 0 #1a1a1a'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translate(0,0)'
              e.currentTarget.style.boxShadow = '5px 5px 0 #1a1a1a'
            }}
          >
            See my work ↓
          </a>
          {content.resumeUrl && (
            <a
              href={content.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                fontWeight: 600,
                fontSize: '1rem',
                border: '3px solid #1a1a1a',
                boxShadow: '5px 5px 0 #1a1a1a',
                background: '#bfdbfe',
                color: '#1a1a1a',
                transition: 'all 0.1s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translate(2px,2px)'
                e.currentTarget.style.boxShadow = '3px 3px 0 #1a1a1a'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translate(0,0)'
                e.currentTarget.style.boxShadow = '5px 5px 0 #1a1a1a'
              }}
            >
              Resume ↗
            </a>
          )}
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '1.2rem',
          fontWeight: 700,
          opacity: 0.3,
          animation: 'bounce 2s ease-in-out infinite',
        }}
      >
        ↓
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </section>
  )
}
