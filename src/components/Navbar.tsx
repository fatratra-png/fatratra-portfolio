import { content } from '../content'
import { useEffect, useState } from 'react'

const sections = ['about', 'skills', 'projects', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? '#fffdf9' : 'transparent',
        borderBottom: scrolled ? '3px solid #1a1a1a' : '3px solid transparent',
        transition: 'all 0.15s ease',
      }}
    >
      <nav
        style={{
          maxWidth: 1024,
          margin: '0 auto',
          padding: '0.75rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a
          href="#"
          style={{
            fontWeight: 700,
            fontSize: '1.25rem',
            letterSpacing: '-0.02em',
          }}
        >
          {content.name}
        </a>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {sections.map((s) => (
            <a
              key={s}
              href={`#${s}`}
              style={{
                padding: '0.4rem 0.8rem',
                fontWeight: 600,
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                border: '2px solid #1a1a1a',
                boxShadow: '3px 3px 0 #1a1a1a',
                transition: 'all 0.1s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translate(1px, 1px)'
                e.currentTarget.style.boxShadow = '2px 2px 0 #1a1a1a'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translate(0, 0)'
                e.currentTarget.style.boxShadow = '3px 3px 0 #1a1a1a'
              }}
            >
              {s}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
