import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import BackgroundAudio from './components/BackgroundAudio'
import { useReveal } from './hooks/useReveal'

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="progress" aria-hidden="true">
      <span style={{ transform: `scaleX(${progress})` }} />
    </div>
  )
}

function useStackSink() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const panels = Array.from(
      document.querySelectorAll<HTMLElement>('.scene > .stack, .scene > .contact'),
    )
    if (!panels.length) return

    let frame = 0
    const update = () => {
      frame = 0
      for (const panel of panels) {
        const next = panel.nextElementSibling
        if (!(next instanceof HTMLElement)) continue
        const top = next.getBoundingClientRect().top
        const sink = Math.min(1, Math.max(0, (window.innerHeight - top) / window.innerHeight))
        panel.style.setProperty('--sink', sink.toFixed(3))
      }
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
}

export default function App() {
  useReveal()
  useStackSink()
  const [booting, setBooting] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  return (
    <>
      <BackgroundAudio />
      <div className="sky" aria-hidden="true">
        <div className="sky__clouds sky__clouds--high" />
        <div className="sky__clouds sky__clouds--low" />
      </div>
      {booting && <Loader onDone={() => setBooting(false)} />}
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Projects />
        <div className="scene">
          <Skills />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  )
}
