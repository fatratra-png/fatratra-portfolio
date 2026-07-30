import { content } from '../content'
import { useEffect, useState } from 'react'

const links = ['about', 'skills', 'projects', 'contact']

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches,
  )
  useEffect(() => {
    const mq = window.matchMedia(query)
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [query])
  return matches
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = useMediaQuery('(max-width: 768px)')

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
        background: scrolled || menuOpen ? 'rgba(250,250,250,0.85)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
        borderBottom: scrolled || menuOpen ? '1px solid #eaeaea' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
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

        {isMobile ? (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              width: 32,
              height: 32,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '5px',
              padding: 0,
              position: 'relative',
            }}
          >
            <span
              style={{
                display: 'block',
                width: 22,
                height: 2,
                background: '#111',
                borderRadius: 1,
                transition: 'all 0.3s ease',
                transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
                transformOrigin: 'center',
              }}
            />
            <span
              style={{
                display: 'block',
                width: 22,
                height: 2,
                background: '#111',
                borderRadius: 1,
                transition: 'all 0.25s ease',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: 22,
                height: 2,
                background: '#111',
                borderRadius: 1,
                transition: 'all 0.3s ease',
                transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
                transformOrigin: 'center',
              }}
            />
          </button>
        ) : (
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
        )}
      </nav>

      {isMobile && (
        <div
          style={{
            maxHeight: menuOpen ? 260 : 0,
            overflow: 'hidden',
            transition: 'max-height 0.4s ease, opacity 0.3s ease',
            opacity: menuOpen ? 1 : 0,
          }}
        >
          <div
            style={{
              padding: menuOpen ? '0.5rem 2rem 1rem' : '0 2rem',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {links.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: id === active ? '#111' : '#888',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid #f0f0f0',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#111' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = id === active ? '#111' : '#888' }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
