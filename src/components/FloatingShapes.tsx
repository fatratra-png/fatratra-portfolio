import { useEffect, useState } from 'react'

const BLOB_PATHS = [
  'M35,12 C55,-8 85,2 93,25 C101,48 88,75 68,88 C48,101 12,92 5,68 C-2,44 15,32 35,12 Z',
  'M45,3 C68,-2 93,8 97,30 C101,52 90,78 70,92 C50,106 18,95 8,72 C-2,49 22,8 45,3 Z',
  'M52,5 C78,-5 100,12 99,40 C98,68 82,90 58,95 C34,100 5,85 2,58 C-1,31 26,15 52,5 Z',
  'M30,18 C55,-10 88,0 94,25 C100,50 90,72 68,85 C46,98 10,88 4,65 C-2,42 5,46 30,18 Z',
  'M40,8 C62,-5 90,5 96,28 C102,51 90,80 68,92 C46,104 15,90 6,68 C-3,46 18,21 40,8 Z',
]

type Blob = {
  id: number
  pathIdx: number
  size: number
  x: number
  y: number
  speed: number
  delay: number
}

const blobs: Blob[] = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  pathIdx: i % BLOB_PATHS.length,
  size: Math.random() * 140 + 80,
  x: Math.random() * 100,
  y: Math.random() * 100,
  speed: Math.random() * 6 + 4,
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
        zIndex: 40,
        pointerEvents: 'none',
        mixBlendMode: 'difference',
        overflow: 'hidden',
      }}
    >
      {blobs.map((b) => {
        const px = mouse.x * 15
        const py = mouse.y * 15

        return (
          <div
            key={b.id}
            style={{
              position: 'absolute',
              left: `${b.x}%`,
              top: `${b.y}%`,
              width: b.size,
              height: b.size,
              transform: `translate(${px}px, ${py}px)`,
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                animation: `float ${b.speed}s ease-in-out ${b.delay}s infinite alternate`,
              }}
            >
              <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', display: 'block' }}>
                <path d={BLOB_PATHS[b.pathIdx]} fill="white" />
              </svg>
            </div>
          </div>
        )
      })}

      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          100% { transform: translateY(-25px); }
        }
      `}</style>
    </div>
  )
}
