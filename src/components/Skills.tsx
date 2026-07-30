import { content } from '../content'
import { useReveal } from '../hooks/useReveal'
import { useEffect, useState } from 'react'

const iconSlug: Record<string, string> = {
  html: 'html5',
  css: 'css3',
  javascript: 'javascript',
  typescript: 'typescript',
  reactjs: 'react',
  tailwindcss: 'tailwindcss',
  java: 'java',
  postgresql: 'postgresql',
  git: 'git',
}

export default function Skills() {
  const { ref, revealed } = useReveal()
  const skills = content.skills
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (!revealed || skills.length <= 1) return
    const timer = setInterval(() => {
      setIdx((p) => (p + 1) % skills.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [revealed, skills.length])

  const go = (i: number) => setIdx(i)
  const prev = () => setIdx((p) => (p - 1 + skills.length) % skills.length)
  const next = () => setIdx((p) => (p + 1) % skills.length)

  return (
    <section
      id="skills"
      style={{
        padding: '5rem 1.5rem',
        maxWidth: 640,
        margin: '0 auto',
      }}
    >
      <div
        ref={ref}
        style={{
          opacity: revealed ? 1 : 0,
          transform: revealed ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            marginBottom: '0.5rem',
          }}
        >
          Skills
        </h2>

        <div
          style={{
            height: 6,
            background: '#1a1a1a',
            marginBottom: '2rem',
            transition: 'width 0.6s ease 0.3s',
            width: revealed ? 60 : 0,
          }}
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <button
            onClick={prev}
            style={{
              width: 40,
              height: 40,
              border: '3px solid #1a1a1a',
              background: '#fffdf9',
              fontWeight: 700,
              fontSize: '1.2rem',
              cursor: 'pointer',
              boxShadow: '3px 3px 0 #1a1a1a',
              transition: 'all 0.1s ease',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
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
            ←
          </button>

          <div
            style={{
              flex: 1,
              overflow: 'hidden',
              border: '3px solid #1a1a1a',
              boxShadow: '5px 5px 0 #1a1a1a',
              background: '#fffdf9',
            }}
          >
            <div
              style={{
                display: 'flex',
                transition: 'transform 0.4s ease',
                transform: `translateX(-${idx * 100}%)`,
              }}
            >
              {skills.map((skill) => {
                const key = skill.name.toLowerCase().replace(/[\s|/]/g, '')
                const slug = iconSlug[key] || key
                const iconUrl = `https://cdn.simpleicons.org/${slug}/${skill.color.replace('#', '')}`

                return (
                  <div
                    key={skill.name}
                    style={{
                      minWidth: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '1.25rem',
                      padding: '2rem 1.5rem',
                    }}
                  >
                    <img
                      src={iconUrl}
                      alt={skill.name}
                      style={{
                        width: 64,
                        height: 64,
                        objectFit: 'contain',
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {skill.name}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          <button
            onClick={next}
            style={{
              width: 40,
              height: 40,
              border: '3px solid #1a1a1a',
              background: '#fffdf9',
              fontWeight: 700,
              fontSize: '1.2rem',
              cursor: 'pointer',
              boxShadow: '3px 3px 0 #1a1a1a',
              transition: 'all 0.1s ease',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
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
            →
          </button>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            marginTop: '1.25rem',
          }}
        >
          {skills.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              style={{
                width: 12,
                height: 12,
                border: '2px solid #1a1a1a',
                background: idx === i ? '#1a1a1a' : '#fffdf9',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.15s ease',
                boxShadow: idx === i ? '2px 2px 0 #1a1a1a' : 'none',
                borderRadius: '50%',
              }}
              aria-label={`Skill ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
