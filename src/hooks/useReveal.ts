import { useEffect, useRef, useState } from 'react'

interface Options {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  rootMargin = '0px',
  once = true,
}: Options = {}) {
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
        } else if (!once) {
          setRevealed(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, revealed }
}

export function useStaggeredReveal<T extends HTMLElement = HTMLDivElement>(
  count: number,
  options: Options = {},
) {
  const { ref, revealed } = useReveal<T>(options)

  const delays = Array.from({ length: count }, (_, i) => i * 0.08)

  return { ref, revealed, delays }
}
