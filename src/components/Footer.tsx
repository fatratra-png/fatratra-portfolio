import { useEffect, useRef } from 'react'
import { content } from '../content'
import LocalTime from './LocalTime'
import { ArrowUpIcon, GitHubIcon, LinkedInIcon } from './icons'

export default function Footer() {
  const year = new Date().getFullYear()
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const node = footerRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        node.classList.add('is-live')
        observer.disconnect()
      },
      { threshold: 0.25 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer__storm" aria-hidden="true">
        <svg className="bolt bolt--a" viewBox="0 0 240 540">
          <path className="bolt__glow" d="M156 -20 L86 204 L142 204 L50 552" />
          <path
            className="bolt__ghost"
            d="M156 -20 L86 204 L142 204 L50 552"
          />
          <path
            className="bolt__core"
            pathLength="1"
            d="M156 -20 L86 204 L142 204 L50 552"
          />
          <path
            className="bolt__branch"
            pathLength="1"
            d="M120 118 L196 150 L166 230"
          />
          <path
            className="bolt__branch"
            pathLength="1"
            d="M100 294 L28 330"
          />
          <path
            className="bolt__branch"
            pathLength="1"
            d="M90 358 L120 416"
          />
        </svg>

        <svg className="bolt bolt--b" viewBox="0 0 160 400">
          <path className="bolt__glow" d="M112 -10 L28 210 L82 210 L38 390" />
          <path
            className="bolt__ghost"
            d="M112 -10 L28 210 L82 210 L38 390"
          />
          <path
            className="bolt__core"
            pathLength="1"
            d="M112 -10 L28 210 L82 210 L38 390"
          />
          <path
            className="bolt__branch"
            pathLength="1"
            d="M70 128 L132 156"
          />
          <path
            className="bolt__branch"
            pathLength="1"
            d="M61 260 L12 285"
          />
        </svg>
      </div>

      <div className="wrap">
        <div className="footer__top" data-reveal>
          <a className="footer__brand" href="#top">
            {content.shortName.toLowerCase()}<span>.</span>
          </a>

          <nav className="footer__nav" aria-label="Footer">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#stack">Stack</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="footer__socials">
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

        <p className="footer__mark" aria-hidden="true" data-reveal style={{ transitionDelay: '80ms' }}>
          {content.shortName.toLowerCase()}<span>.</span>
        </p>

        <div className="footer__bottom">
          <p>
            © {year} {content.name}
          </p>
          <p>
            {content.location} / <LocalTime />
          </p>
          <a className="footer__top-link" href="#top">
            Back to top
            <ArrowUpIcon className="icon icon--xs" />
          </a>
        </div>
      </div>
    </footer>
  )
}
