import { content } from '../content'
import { useEffect, useState } from 'react'

const links = [
  { id: 'about', label: '01', name: 'About' },
  { id: 'skills', label: '02', name: 'Skills' },
  { id: 'projects', label: '03', name: 'Work' },
  { id: 'contact', label: '04', name: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id)
        }
      },
      { threshold: 0.25, rootMargin: '-80px 0px 0px 0px' },
    )

    for (const { id } of links) {
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
        transition: 'all 0.2s ease',
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
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
            fontWeight: 800,
            fontSize: '1.3rem',
            border: '3px solid #1a1a1a',
            boxShadow: '4px 4px 0 #1a1a1a',
            padding: '0.3rem 0.8rem',
            background: '#fef08a',
            transition: 'all 0.15s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translate(-2px,-2px)'
            e.currentTarget.style.boxShadow = '6px 6px 0 #1a1a1a'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translate(0,0)'
            e.currentTarget.style.boxShadow = '4px 4px 0 #1a1a1a'
          }}
        >
          {content.name.split(' ').pop()}.
        </a>

        <div
          style={{
            display: 'flex',
            gap: '0.3rem',
            alignItems: 'center',
          }}
        >
          {links.map((l) => {
            const isActive = active === l.id
            return (
              <a
                key={l.id}
                href={`#${l.id}`}
                style={{
                  padding: '0.4rem 0.7rem',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  border: '2px solid #1a1a1a',
                  boxShadow: isActive ? '1px 1px 0 #1a1a1a' : '3px 3px 0 #1a1a1a',
                  transform: isActive ? 'translate(2px,2px)' : 'none',
                  background: isActive ? '#1a1a1a' : '#fffdf9',
                  color: isActive ? '#fffdf9' : '#1a1a1a',
                  transition: 'all 0.1s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.transform = 'translate(1px,1px)'
                    e.currentTarget.style.boxShadow = '2px 2px 0 #1a1a1a'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.transform = 'translate(0,0)'
                    e.currentTarget.style.boxShadow = '3px 3px 0 #1a1a1a'
                  }
                }}
              >
                <span style={{ fontFamily: 'monospace', opacity: 0.5 }}>{l.label}</span>
                <span style={{ display: 'none' }} className="nav-label">
                  {l.name}
                </span>
              </a>
            )
          })}
        </div>
      </nav>
    </header>
  )
}
