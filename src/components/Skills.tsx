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

const cols = 3
const rows = 2
const perPage = cols * rows

export default function Skills() {
  const { ref, revealed } = useReveal()
  const skills = content.skills
  const totalPages = Math.ceil(skills.length / perPage)
  const [page, setPage] = useState(0)

  useEffect(() => {
    if (!revealed || totalPages <= 1) return
    const timer = setInterval(() => {
      setPage((p) => (p + 1) % totalPages)
    }, 3000)
    return () => clearInterval(timer)
  }, [revealed, totalPages])

  const go = (p: number) => setPage(p)

  return (
    <section
      id="skills"
      style={{
        padding: '5rem 1.5rem',
        maxWidth: 768,
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
            position: 'relative',
            overflow: 'hidden',
            border: '3px solid #1a1a1a',
            boxShadow: '6px 6px 0 #1a1a1a',
            padding: '1rem',
            background: '#fffdf9',
          }}
        >
          <div
            style={{
              display: 'flex',
              transition: 'transform 0.5s ease',
              transform: `translateX(-${page * 100}%)`,
            }}
          >
            {Array.from({ length: totalPages }).map((_, pi) => (
              <div
                key={pi}
                style={{
                  minWidth: '100%',
                  display: 'grid',
                  gridTemplateColumns: `repeat(${cols}, 1fr)`,
                  gap: '0.75rem',
                }}
              >
                {skills.slice(pi * perPage, pi * perPage + perPage).map((skill) => {
                  const key = skill.name.toLowerCase().replace(/[\s|/]/g, '')
                  const slug = iconSlug[key] || key
                  const iconUrl = `https://cdn.simpleicons.org/${slug}/${skill.color.replace('#', '')}`

                  return (
                    <div
                      key={skill.name}
                      style={{
                        aspectRatio: '1 / 1',
                        border: '3px solid #1a1a1a',
                        boxShadow: '4px 4px 0 #1a1a1a',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem',
                        background: '#fffdf9',
                        transition: 'all 0.15s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translate(-2px, -2px)'
                        e.currentTarget.style.boxShadow = '6px 6px 0 #1a1a1a'
                        e.currentTarget.style.background = skill.color
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translate(0, 0)'
                        e.currentTarget.style.boxShadow = '4px 4px 0 #1a1a1a'
                        e.currentTarget.style.background = '#fffdf9'
                      }}
                    >
                      <img
                        src={iconUrl}
                        alt={skill.name}
                        style={{
                          width: '48%',
                          height: '48%',
                          objectFit: 'contain',
                          pointerEvents: 'none',
                          filter: 'drop-shadow(1px 1px 0 rgba(0,0,0,0.1))',
                        }}
                      />
                      <span
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          textAlign: 'center',
                          lineHeight: 1.2,
                        }}
                      >
                        {skill.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>

        {totalPages > 1 && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '1.5rem',
            }}
          >
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                style={{
                  width: 14,
                  height: 14,
                  border: '2px solid #1a1a1a',
                  background: page === i ? '#1a1a1a' : '#fffdf9',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.15s ease',
                  boxShadow: page === i ? '2px 2px 0 #1a1a1a' : 'none',
                }}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
