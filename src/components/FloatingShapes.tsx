import { useEffect, useState } from 'react'

type Shape = {
  id: number
  type: 'circle' | 'square'
  size: number
  x: number
  y: number
  speed: number
  delay: number
}

const shapes: Shape[] = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  type: i % 2 === 0 ? 'circle' : 'square',
  size: Math.random() * 40 + 20,
  x: Math.random() * 100,
  y: Math.random() * 100,
  speed: Math.random() * 8 + 4,
  delay: Math.random() * 5,
}))

export default function FloatingShapes() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {shapes.map((s) => {
        const px = mouse.x * 20 * (s.speed / 6)
        const py = mouse.y * 20 * (s.speed / 6)

        return (
          <div
            key={s.id}
            style={{
              position: 'absolute',
              left: `${s.x}%`,
              top: `${s.y}%`,
              transform: `translate(${px}px, ${py}px)`,
            }}
          >
            <div
              style={{
                width: s.size,
                height: s.size,
                borderRadius: s.type === 'circle' ? '50%' : '0',
                border: '1px solid #eaeaea',
                background: 'rgba(255,255,255,0.4)',
                animation: `float ${s.speed}s ease-in-out ${s.delay}s infinite alternate`,
              }}
            />
          </div>
        )
      })}

      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          100% { transform: translateY(-30px); }
        }
      `}</style>
    </div>
  )
}
