import { content } from '../content'
import { useEffect, useState } from 'react'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' },
    )

    for (const { id } of sections) {
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
        background: scrolled ? 'rgba(10,10,10,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #222' : '1px solid transparent',
        transition: 'all 0.3s ease',
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
            fontWeight: 500,
            fontSize: '1rem',
            letterSpacing: '-0.02em',
            color: '#64ffda',
            fontFamily: 'JetBrains Mono, monospace',
          }}
        >
          {content.name.split(' ').pop()}.
        </a>

        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {sections.map((s) => {
            const isActive = active === s.id
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 400,
                  color: isActive ? '#64ffda' : '#666',
                  transition: 'color 0.15s',
                  fontFamily: 'JetBrains Mono, monospace',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#f0f0f0' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = isActive ? '#64ffda' : '#666' }}
              >
                {s.label}
              </a>
            )
          })}
        </div>
      </nav>
    </header>
  )
}
