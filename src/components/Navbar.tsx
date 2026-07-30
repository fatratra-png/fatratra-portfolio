import { content } from '../content'
import { useEffect, useState } from 'react'

const links = ['about', 'skills', 'projects', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id)
        }
      },
      { threshold: 0.25, rootMargin: '-80px 0px 0px 0px' },
    )

    for (const id of links) {
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
        background: scrolled ? 'rgba(250,250,250,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #eaeaea' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <nav
        style={{
          maxWidth: 1024,
          margin: '0 auto',
          padding: '1rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a
          href="#"
          style={{
            fontWeight: 600,
            fontSize: '1.1rem',
            letterSpacing: '-0.02em',
          }}
        >
          {content.name.split(' ').pop()}
        </a>

        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {links.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              style={{
                fontSize: '0.85rem',
                fontWeight: 500,
                color: id === active ? '#111' : '#888',
                transition: 'color 0.15s',
                borderBottom: id === active ? '1px solid #111' : '1px solid transparent',
                paddingBottom: '0.15rem',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#111' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = id === active ? '#111' : '#888' }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
