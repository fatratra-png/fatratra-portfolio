import { content } from '../content'
import { useStaggeredReveal } from '../hooks/useReveal'
import { useRef, useState } from 'react'
import TechIcon from './TechIcons'

const chipBgColors = [
  '#fef08a', '#bfdbfe', '#fecaca', '#d1fae5',
  '#e9d5ff', '#fed7aa', '#fecdd3', '#cffafe',
  '#fef3c7', '#ddd6fe',
]

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
            height: 6,
            background: '#1a1a1a',
            marginBottom: '2rem',
            transition: 'width 0.6s ease 0.3s',
            width: revealed ? 60 : 0,
          }}
        />

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {content.skills.map((skill, i) => (
            <SkillChip
              key={skill.name}
              skill={skill}
              chipColor={chipBgColors[i % chipBgColors.length]}
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
  chipColor,
  delay,
  revealed,
}: {
  skill: (typeof content.skills)[number]
  chipColor: string
  delay: number
  revealed: boolean
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [burst, setBurst] = useState(false)
  const elRef = useRef<HTMLDivElement>(null)

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = elRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: x * 12, y: y * -12 })
  }

  const resetTilt = () => setTilt({ x: 0, y: 0 })

  const handleEnter = () => {
    setBurst(true)
    setTimeout(() => setBurst(false), 300)
  }

  return (
    <div
      ref={elRef}
      style={{
        border: '2px solid #1a1a1a',
        boxShadow: burst ? '2px 2px 0 #1a1a1a' : '4px 4px 0 #1a1a1a',
        padding: '0.6rem 1.2rem',
        fontWeight: 600,
        fontSize: '0.9rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.65rem',
        background: burst ? skill.color : chipColor,
        color: burst ? '#fff' : '#1a1a1a',
        cursor: 'default',
        transition: `all 0.15s ease, transform 0.5s ease ${delay}s, opacity 0.5s ease ${delay}s`,
        transform: revealed
          ? `perspective(400px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`
          : 'translateY(20px)',
        opacity: revealed ? 1 : 0,
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseMove={handleMouse}
      onMouseLeave={(e) => {
        resetTilt()
        setBurst(false)
        e.currentTarget.style.background = chipColor
        e.currentTarget.style.color = '#1a1a1a'
      }}
      onMouseEnter={(e) => {
        handleEnter()
        e.currentTarget.style.background = skill.color
        e.currentTarget.style.color = '#fff'
      }}
    >
      <TechIcon name={skill.name} size={22} />
      {skill.name}
    </div>
  )
}
