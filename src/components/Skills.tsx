import { content } from '../content'
import { useStaggeredReveal } from '../hooks/useReveal'
import { useRef, useState } from 'react'

export default function Skills() {
  const skillCount = content.skills.length
  const { ref, revealed, delays } = useStaggeredReveal<HTMLDivElement>(skillCount)

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
        className={`reveal-stagger ${revealed ? 'revealed' : ''}`}
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
            width: 60,
            height: 6,
            background: '#1a1a1a',
            marginBottom: '2rem',
          }}
        />

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {content.skills.map((skill, i) => (
            <SkillChip
              key={skill.name}
              skill={skill}
              delay={delays[i]}
              revealed={revealed}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillChip({
  skill,
  delay,
  revealed,
}: {
  skill: (typeof content.skills)[number]
  delay: number
  revealed: boolean
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const elRef = useRef<HTMLDivElement>(null)

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = elRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: x * 8, y: y * -8 })
  }

  const resetTilt = () => setTilt({ x: 0, y: 0 })

  return (
    <div
      ref={elRef}
      style={{
        border: '2px solid #1a1a1a',
        boxShadow: '3px 3px 0 #1a1a1a',
        padding: '0.5rem 1rem',
        fontWeight: 600,
        fontSize: '0.9rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        background: '#fffdf9',
        transition: `all 0.15s ease, transform 0.5s ease ${delay}s, opacity 0.5s ease ${delay}s`,
        transform: revealed
          ? `perspective(400px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`
          : 'translateY(20px)',
        opacity: revealed ? 1 : 0,
        cursor: 'default',
      }}
      onMouseMove={handleMouse}
      onMouseLeave={resetTilt}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = skill.color
        e.currentTarget.style.color =
          parseInt(skill.color.replace('#', ''), 16) > 0xcccccc ? '#1a1a1a' : '#fff'
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.background = '#fffdf9'
        e.currentTarget.style.color = '#1a1a1a'
      }}
    >
        {skill.name}
    </div>
  )
}
