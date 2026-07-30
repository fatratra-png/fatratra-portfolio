import { content } from '../content'
import { useEffect, useRef, useState } from 'react'

function useTyping(text: string, speed = 35) {
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
  const sectionRef = useRef<HTMLDivElement>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      setMouse({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      })
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '6rem 2rem 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '45vw',
          height: '45vw',
          maxWidth: 500,
          maxHeight: 500,
          borderRadius: '50%',
          background: '#fef08a',
          border: '4px solid #1a1a1a',
          transform: `translate(${mouse.x * 20}px, ${mouse.y * 20}px)`,
          transition: 'transform 0.1s ease-out',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-8%',
          left: '-3%',
          width: '30vw',
          height: '30vw',
          maxWidth: 350,
          maxHeight: 350,
          borderRadius: '50%',
          background: '#bfdbfe',
          border: '4px solid #1a1a1a',
          transform: `translate(${mouse.x * -25}px, ${mouse.y * -25}px)`,
          transition: 'transform 0.1s ease-out',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '8%',
          width: 24,
          height: 24,
          background: '#fecaca',
          border: '3px solid #1a1a1a',
          transform: 'rotate(45deg)',
          opacity: 0.7,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '30%',
          right: '12%',
          width: 18,
          height: 18,
          background: '#bbf7d0',
          border: '3px solid #1a1a1a',
          borderRadius: '50%',
          opacity: 0.7,
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto', width: '100%' }}>
        <div
          style={{
            display: 'inline-block',
            border: '3px solid #1a1a1a',
            boxShadow: '4px 4px 0 #1a1a1a',
            padding: '0.4rem 1rem',
            marginBottom: '1.5rem',
            background: '#1a1a1a',
            color: '#fffdf9',
            fontWeight: 700,
            fontSize: '0.8rem',
            fontFamily: 'monospace',
          }}
        >
          {content.title}
        </div>

        <h1
          style={{
            fontSize: 'clamp(3rem, 12vw, 6rem)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 0.9,
            marginBottom: '1.5rem',
          }}
        >
          {content.name}
        </h1>

        <p
          style={{
            fontSize: '1.2rem',
            color: '#555',
            maxWidth: 560,
            minHeight: '1.8em',
            marginBottom: '2.5rem',
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
                marginLeft: 4,
                verticalAlign: 'text-bottom',
                animation: 'cursor-blink 0.8s step-end infinite',
              }}
            />
          )}
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href="#projects"
            style={{
              padding: '0.85rem 2rem',
              fontWeight: 700,
              fontSize: '1.05rem',
              border: '3px solid #1a1a1a',
              boxShadow: '6px 6px 0 #1a1a1a',
              background: '#fef08a',
              color: '#1a1a1a',
              transition: 'all 0.1s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translate(3px,3px)'
              e.currentTarget.style.boxShadow = '3px 3px 0 #1a1a1a'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translate(0,0)'
              e.currentTarget.style.boxShadow = '6px 6px 0 #1a1a1a'
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
                padding: '0.85rem 2rem',
                fontWeight: 700,
                fontSize: '1.05rem',
                border: '3px solid #1a1a1a',
                boxShadow: '6px 6px 0 #1a1a1a',
                background: '#bfdbfe',
                color: '#1a1a1a',
                transition: 'all 0.1s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translate(3px,3px)'
                e.currentTarget.style.boxShadow = '3px 3px 0 #1a1a1a'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translate(0,0)'
                e.currentTarget.style.boxShadow = '6px 6px 0 #1a1a1a'
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
          bottom: '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.3rem',
          opacity: 0.4,
          fontWeight: 700,
          fontSize: '0.8rem',
          animation: 'float 2.5s ease-in-out infinite',
        }}
      >
        <span>scroll</span>
        <span style={{ fontSize: '1.2rem' }}>↓</span>
      </div>
    </section>
  )
}
