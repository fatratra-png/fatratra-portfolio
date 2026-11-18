import { useEffect, useRef, useState } from 'react'
import { content } from '../content'
import LocalTime from './LocalTime'
import { CheckIcon, CopyIcon, GitHubIcon, LinkedInIcon } from './icons'

type CopyStatus = 'idle' | 'copied' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<CopyStatus>('idle')
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => {
    return () => window.clearTimeout(timer.current)
  }, [])

  const copyEmail = async () => {
    window.clearTimeout(timer.current)
    try {
      await navigator.clipboard.writeText(content.email)
      setStatus('copied')
    } catch {
      setStatus('error')
    }
    timer.current = window.setTimeout(() => setStatus('idle'), 2500)
  }

  return (
    <section id="contact" className="section contact">
      <div className="wrap">
        <p className="label" data-reveal>
          Contact
        </p>

        <div className="contact__grid">
          <h2 className="contact__title" data-reveal>
            Let&apos;s build
            <br />
            something
            <br />
            worth using.
          </h2>

          <div className="contact__side" data-reveal style={{ transitionDelay: '90ms' }}>
            <p className="contact__intro">
              Tell me what you&apos;re building — the messier the idea, the
              better.
            </p>

            <div className="contact__mail">
              <a className="contact__email" href={`mailto:${content.email}`}>
                {content.email}
              </a>
              <button
                type="button"
                className="contact__copy"
                onClick={copyEmail}
                aria-label="Copy email address"
                title="Copy email address"
              >
                {status === 'copied' ? (
                  <CheckIcon className="icon" />
                ) : (
                  <CopyIcon className="icon" />
                )}
              </button>
              <span className="contact__status" role="status" aria-live="polite">
                {status === 'copied' && 'Copied'}
                {status === 'error' && 'Copy failed — select the address'}
              </span>
            </div>

            <div className="contact__socials">
              {content.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.label === 'GitHub' ? (
                    <GitHubIcon className="icon" />
                  ) : (
                    <LinkedInIcon className="icon" />
                  )}
                  {social.label}
                </a>
              ))}
            </div>

            <p className="contact__meta">
              {content.location} / <LocalTime />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
