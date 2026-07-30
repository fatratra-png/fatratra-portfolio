import { useEffect, useRef } from 'react'

export default function FloatingShapes() {
  const pathRef = useRef<SVGPathElement>(null)
  const timeRef = useRef(0)
  const rafRef = useRef(0)

  useEffect(() => {
    const w = 300
    const h = 400
    const cx = w / 2
    const cy = h / 2
    const baseR = 120

    function generate(t: number) {
      const points: [number, number][] = []
      const count = 12

      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2
        const wave1 = Math.sin(t * 0.6 + i * 0.8) * 30
        const wave2 = Math.sin(t * 0.4 + i * 1.2 + 1) * 20
        const r = baseR + wave1 + wave2
        const x = cx + Math.cos(angle) * r
        const y = cy + Math.sin(angle) * r
        points.push([x, y])
      }

      let d = `M ${points[0][0]} ${points[0][1]}`
      for (let i = 0; i < count; i++) {
        const p0 = points[i]
        const p1 = points[(i + 1) % count]
        const cpx = (p0[0] + p1[0]) / 2 + Math.sin(t + i) * 10
        const cpy = (p0[1] + p1[1]) / 2 + Math.cos(t + i) * 10
        d += ` Q ${cpx} ${cpy} ${p1[0]} ${p1[1]}`
      }

      if (pathRef.current) pathRef.current.setAttribute('d', d)
    }

    function loop() {
      timeRef.current += 0.015
      generate(timeRef.current)
      rafRef.current = requestAnimationFrame(loop)
    }

    rafRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        zIndex: 40,
        pointerEvents: 'none',
        mixBlendMode: 'difference',
      }}
    >
      <svg
        width="400"
        height="500"
        viewBox="0 0 300 400"
        style={{ display: 'block', filter: 'blur(3px)' }}
      >
        <path ref={pathRef} fill="white" opacity={0.95} />
      </svg>
    </div>
  )
}
