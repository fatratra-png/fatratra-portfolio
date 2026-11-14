import type { ReactNode } from 'react'

export function Pin({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`pin ${className}`.trim()}
      width="34"
      height="34"
      viewBox="0 0 34 34"
      aria-hidden="true"
    >
      <circle cx="17" cy="14" r="10.5" fill="#D9714E" stroke="#1A1A1A" strokeWidth="2.6" />
      <circle cx="13.5" cy="10.5" r="3" fill="#F5EFE3" />
      <path d="M12 20 L22 20 L17 30 Z" fill="#1A1A1A" />
    </svg>
  )
}

type DoodleKind = 'spiral' | 'arrow' | 'curve' | 'spring'

const PATHS: Record<DoodleKind, string> = {
  spiral:
    'M54 8 C26 2 6 18 10 36 C14 54 44 58 60 44 C74 32 66 10 46 12 C30 14 22 30 32 44',
  arrow:
    'M4 10 C38 4 74 22 110 56 M104 46 L111 57 L99 62',
  curve:
    'M2 34 C30 2 72 64 118 26',
  spring:
    'M23 6 L41 16 L5 28 L41 40 L5 52 L41 64 L23 82 M23 82 L6 56 M23 82 L40 56',
}

const VIEWBOX: Record<DoodleKind, string> = {
  spiral: '0 0 118 64',
  arrow: '0 0 118 64',
  curve: '0 0 118 64',
  spring: '0 0 46 96',
}

export function Doodle({
  kind,
  className = '',
  color = '#1A1A1A',
}: {
  kind: DoodleKind
  className?: string
  color?: string
}) {
  const isSpring = kind === 'spring'
  return (
    <svg
      className={`doodle ${className}`.trim()}
      width={isSpring ? 46 : 118}
      height={isSpring ? 96 : 64}
      viewBox={VIEWBOX[kind]}
      aria-hidden="true"
    >
      <path d={PATHS[kind]} stroke={color} strokeWidth={isSpring ? 3.2 : 2.8} />
    </svg>
  )
}

export function ArrowRightIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}

export function ArrowUpRightIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  )
}

export function CopyIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

export function EnvelopeIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

export function GlobeIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c3.2 3.3 3.2 14.7 0 18" />
      <path d="M12 3c-3.2 3.3-3.2 14.7 0 18" />
    </svg>
  )
}

export function GithubIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

export function SocialIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M15 12a3 3 0 1 1-3-3" />
    </svg>
  )
}

export function LinkedInIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function SectionHead({
  label,
  title,
  tagAngle = -3,
  align = 'left',
}: {
  label: string
  title: ReactNode
  tagAngle?: number
  align?: 'left' | 'center'
}) {
  return (
    <header className={`section-head${align === 'center' ? ' section-head--center' : ''}`}>
      <span className="sticky-tag" style={{ transform: `rotate(${tagAngle}deg)` }}>
        {label}
      </span>
      <h2 className="section-title">{title}</h2>
    </header>
  )
}