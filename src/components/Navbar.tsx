import { useEffect, useRef, useState } from 'react'
import { content } from '../content'
import { useActiveSection } from '../hooks/useActiveSection'
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon } from './icons'

const links = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
]

const sectionIds = links.map((link) => link.id)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(sectionIds)
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const previousOverflow = document.body.style.overflow
    const inertTargets = Array.from(
      document.querySelectorAll<HTMLElement>('main, footer'),
    )
    document.body.style.overflow = 'hidden'
    inertTargets.forEach((el) => el.setAttribute('inert', ''))

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    menuRef.current?.querySelector<HTMLAnchorElement>('a')?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      inertTargets.forEach((el) => el.removeAttribute('inert'))
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`nav${scrolled || menuOpen ? ' is-solid' : ''}${menuOpen ? ' is-menu' : ''}`}
    >
      <div className="nav__inner wrap">
        <a
          className="nav__wordmark"
          href="#top"
          aria-label={`${content.shortName} — back to top`}
          onClick={closeMenu}
        >
          {content.shortName.toLowerCase()}<span>.</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav__link${active === link.id ? ' is-active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__end">
          <a className="btn btn--ink nav__cta" href={`mailto:${content.email}`}>
            Email me
            <ArrowUpRightIcon className="icon icon--sm" />
          </a>
          <button
            ref={toggleRef}
            type="button"
            className={`nav__toggle${menuOpen ? ' is-open' : ''}`}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="mobile-menu" ref={menuRef}>
          <nav className="mobile-menu__links" aria-label="Mobile">
            {links.map((link) => (
              <a key={link.id} href={`#${link.id}`} onClick={closeMenu}>
                {link.label}
                <ArrowUpRightIcon className="icon" />
              </a>
            ))}
          </nav>

          <div className="mobile-menu__foot">
            <a className="mobile-menu__email" href={`mailto:${content.email}`}>
              {content.email}
            </a>
            <div className="mobile-menu__socials">
              {content.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.label === 'GitHub' ? (
                    <GitHubIcon className="icon icon--sm" />
                  ) : (
                    <LinkedInIcon className="icon icon--sm" />
                  )}
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
