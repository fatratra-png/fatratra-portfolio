import { useEffect, useRef } from 'react'

// shortcut: user-supplied track — check you have the rights to publish it
const SOURCE = encodeURI(
  '/audio/LEGO NINJAGO  The Fold  The Weekend Whip - Pirate Whip (Instrumental) - Ninjago Music.mp3',
)
const VOLUME = 0.2

export default function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = VOLUME

    let dead = false
    const events = ['pointerdown', 'keydown', 'touchstart', 'scroll'] as const

    const disarm = () => {
      events.forEach((name) => window.removeEventListener(name, start))
    }

    const start = async () => {
      try {
        await audio.play()
        if (!dead) disarm()
      } catch (error) {
        // Autoplay policy keeps the gesture listeners; other errors stop retrying.
        if (!(error instanceof DOMException && error.name === 'NotAllowedError')) {
          disarm()
        }
      }
    }

    void start()
    events.forEach((name) => {
      window.addEventListener(name, start, { passive: true })
    })

    return () => {
      dead = true
      disarm()
    }
  }, [])

  return <audio ref={audioRef} src={SOURCE} loop preload="none" />
}
