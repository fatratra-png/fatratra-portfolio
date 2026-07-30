import { useEffect, useRef, useState } from 'react'

export function useReveal<T extends HTMLElement = HTMLDivElement>(options?: {
  threshold?: number
  once?: boolean
}) {
  const { threshold = 0.1, once = true } = options || {}
  const ref = useRef<T>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          if (once) observer.unobserve(el)
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  return { ref, revealed }
}

export function useStaggeredReveal<T extends HTMLElement = HTMLDivElement>(
  count: number,
  options?: { threshold?: number; once?: boolean },
) {
  const { ref, revealed } = useReveal<T>(options)
  const delays = Array.from({ length: count }, (_, i) => i * 0.1)
  return { ref, revealed, delays }
}
