import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>('[data-reveal]')

    if (!('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-revealed'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])
}
