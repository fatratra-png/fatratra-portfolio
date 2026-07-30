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
  const { displayed, done: typingDone } = useTyping(content.tagline, 30)
  const { ref, revealed } = useReveal({ threshold: 0.1 })

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '6rem 1.5rem 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="animate-float"
        style={{
          position: 'absolute',
          top: -120,
          right: -120,
          width: 360,
          height: 360,
          borderRadius: '50%',
          background: '#fef08a',
          border: '3px solid #1a1a1a',
          opacity: 0.6,
        }}
      />
      <div
        className="animate-float-slow"
        style={{
          position: 'absolute',
          bottom: -80,
          left: -80,
          width: 260,
          height: 260,
          borderRadius: '50%',
          background: '#bfdbfe',
          border: '3px solid #1a1a1a',
          opacity: 0.6,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '10%',
          width: 40,
          height: 40,
          border: '3px solid #1a1a1a',
          background: '#fecaca',
          transform: 'rotate(45deg)',
          opacity: 0.5,
          animation: 'float 7s ease-in-out infinite',
          animationDelay: '1s',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '25%',
          right: '8%',
          width: 30,
          height: 30,
          border: '3px solid #1a1a1a',
          background: '#bbf7d0',
          transform: 'rotate(15deg)',
          opacity: 0.5,
          animation: 'float-slow 9s ease-in-out infinite',
          animationDelay: '2s',
        }}
      />

      <div
        ref={ref}
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          maxWidth: 640,
          opacity: revealed ? 1 : 0,
          transform: revealed ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        <h1
          className="animate-glitch"
          style={{
            fontSize: 'clamp(3rem, 10vw, 5.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            marginBottom: '1rem',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.classList.remove('animate-glitch')
            void e.currentTarget.offsetWidth
            e.currentTarget.classList.add('animate-glitch')
          }}
        >
          {content.name}
        </h1>

        <div
          style={{
            display: 'inline-block',
            border: '3px solid #1a1a1a',
            boxShadow: '5px 5px 0 #1a1a1a',
            padding: '0.5rem 1.5rem',
            marginBottom: '1.5rem',
            background: '#1a1a1a',
            color: '#fffdf9',
            fontWeight: 600,
            fontSize: '1.1rem',
            letterSpacing: '0.02em',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translate(-2px, -2px)'
            e.currentTarget.style.boxShadow = '7px 7px 0 #1a1a1a'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translate(0, 0)'
            e.currentTarget.style.boxShadow = '5px 5px 0 #1a1a1a'
          }}
        >
          {content.title}
        </div>

        <p
          style={{
            fontSize: '1.15rem',
            color: '#4a4a4a',
            maxWidth: 480,
            margin: '0 auto 2rem',
            minHeight: '1.8em',
          }}
        >
          {displayed}
          {!typingDone && (
            <span
              style={{
                display: 'inline-block',
                width: 2,
                height: '1.1em',
                background: '#1a1a1a',
                marginLeft: 2,
                verticalAlign: 'text-bottom',
                animation: 'typing-cursor 0.8s step-end infinite',
              }}
            />
          )}
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#projects" className="neu-btn">
            See my work ↓
          </a>
          {content.resumeUrl && (
            <a href={content.resumeUrl} target="_blank" rel="noopener noreferrer" className="neu-btn">
              Resume ↗
            </a>
          )}
        </div>
      </div>

      <div
        className="animate-bounce-down"
        style={{
          position: 'absolute',
          bottom: '2rem',
          fontSize: '1.5rem',
          fontWeight: 700,
          opacity: 0.4,
        }}
      >
        ↓
      </div>
    </section>
  )
}
