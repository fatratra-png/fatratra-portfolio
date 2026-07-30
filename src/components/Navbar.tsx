import { content } from '../content'
import { useEffect, useState } from 'react'

const sections = ['about', 'skills', 'projects', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id)
        }
      },
      { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' },
    )

    for (const id of sections) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
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
            fontSize: '1.2rem',
            border: '2px solid #1a1a1a',
            boxShadow: '3px 3px 0 #1a1a1a',
            padding: '0.25rem 0.75rem',
            background: '#fef08a',
          }}
        >
          {content.name.split(' ').pop()}.
        </a>

        <div style={{ display: 'flex', gap: '0.4rem' }}>
          {sections.map((s) => {
            const isActive = active === s
            return (
              <a
                key={s}
                href={`#${s}`}
                style={{
                  padding: '0.35rem 0.7rem',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  border: '2px solid #1a1a1a',
                  boxShadow: isActive ? '1px 1px 0 #1a1a1a' : '3px 3px 0 #1a1a1a',
                  transform: isActive ? 'translate(2px,2px)' : 'none',
                  background: isActive ? '#1a1a1a' : '#fffdf9',
                  color: isActive ? '#fffdf9' : '#1a1a1a',
                  transition: 'all 0.1s ease',
                }}
              >
                {s}
              </a>
            )
          })}
        </div>
      </nav>
    </header>
  )
}
