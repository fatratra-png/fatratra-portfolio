import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const WORD = 'fatratra.'
const GLYPHS = [...WORD]
const BINARY = GLYPHS.map((char) =>
  char.charCodeAt(0).toString(2).padStart(8, '0'),
).join(' ')
const TOTAL = GLYPHS.length

type LoaderProps = {
  onDone: () => void
}

export default function Loader({ onDone }: LoaderProps) {
  const [decoded, setDecoded] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const onDoneRef = useRef(onDone)
  onDoneRef.current = onDone

  useLayoutEffect(() => {
    const root = document.documentElement
    const previousOverflow = document.body.style.overflow
    const loader = document.querySelector('.loader')
    const siblings = Array.from(
      document.getElementById('root')?.children ?? [],
    ).filter((node): node is HTMLElement => node !== loader)

    root.classList.add('booting')
    document.body.style.overflow = 'hidden'
    siblings.forEach((node) => node.setAttribute('inert', ''))

    return () => {
      root.classList.remove('booting')
      document.body.style.overflow = previousOverflow
      siblings.forEach((node) => node.removeAttribute('inert'))
    }
  }, [])

  useEffect(() => {
    let frame = 0
    const timers: number[] = []
    const start = performance.now()
    const hold = 1000
    const step = 70
    const ready = 360
    const exit = 600

    const tick = (now: number) => {
      const elapsed = now - start

      if (elapsed < hold) {
        frame = requestAnimationFrame(tick)
        return
      }

      const next = Math.min(TOTAL, Math.floor((elapsed - hold) / step) + 1)
      setDecoded(next)

      if (next < TOTAL) {
        frame = requestAnimationFrame(tick)
        return
      }

      timers.push(
        window.setTimeout(() => {
          document.documentElement.classList.remove('booting')
          setLeaving(true)
        }, ready),
      )
      timers.push(window.setTimeout(() => onDoneRef.current(), ready + exit))
    }

    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      timers.forEach((timer) => window.clearTimeout(timer))
    }
  }, [])

  return (
    <div
      className={`loader${decoded > 0 ? ' is-decoding' : ''}${leaving ? ' is-leaving' : ''}`}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="loader__inner" aria-hidden="true">
        <p className="loader__binary">{BINARY}</p>

        <p className="loader__word">
          {GLYPHS.map((char, index) => (
            <span
              key={`${char}-${index}`}
              className={`loader__glyph${index < decoded ? ' is-decoded' : ''}`}
            >
              <span className="loader__letter">{char}</span>
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}
