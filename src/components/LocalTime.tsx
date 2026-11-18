import { useEffect, useState } from 'react'

function timeInAntananarivo() {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Indian/Antananarivo',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date())
}

export default function LocalTime() {
  const [time, setTime] = useState(timeInAntananarivo)

  useEffect(() => {
    const timer = setInterval(() => setTime(timeInAntananarivo()), 30_000)
    return () => clearInterval(timer)
  }, [])

  return <time>{time} EAT</time>
}
