import { memo } from 'react'

export function CrossIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 64" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M20 4h8v18h16v8H28v30h-8V30H4v-8h16z" />
      <path d="M24 10v44M10 26h28" strokeWidth="0.6" opacity=".6" />
    </svg>
  )
}

export function Sparkle({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M10 0l1.2 8.8L20 10l-8.8 1.2L10 20l-1.2-8.8L0 10l8.8-1.2z" />
    </svg>
  )
}

export function Divider({ tone = 'gold' }: { tone?: 'gold' | 'light' }) {
  const c = tone === 'gold' ? 'via-gold-500' : 'via-gold-300'
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden="true">
      <span className={`h-px w-14 bg-gradient-to-r from-transparent ${c} to-gold-500/60`} />
      <span className="w-1.5 h-1.5 rotate-45 bg-gold-500 block" />
      <span className={`h-px w-14 bg-gradient-to-l from-transparent ${c} to-gold-500/60`} />
    </div>
  )
}

/** Marco de esquinas doradas */
export function CornerFrame({ className = '' }: { className?: string }) {
  const corner = (rot: string) => (
    <svg className={`block w-14 h-14 text-gold-500 ${rot}`} viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M2 54V14C2 7 7 2 14 2h40" />
      <path d="M9 54V18c0-5 4-9 9-9h36" opacity=".5" />
      <circle cx="14" cy="14" r="2" fill="currentColor" />
    </svg>
  )
  return (
    <div className={`absolute inset-4 pointer-events-none ${className}`} aria-hidden="true">
      <div className="absolute top-0 left-0">{corner('')}</div>
      <div className="absolute top-0 right-0">{corner('rotate-90')}</div>
      <div className="absolute bottom-0 right-0">{corner('rotate-180')}</div>
      <div className="absolute bottom-0 left-0">{corner('-rotate-90')}</div>
    </div>
  )
}

export const Stars = memo(function Stars({ dim = false }: { dim?: boolean }) {
  const pts = [
    ['top-[12%]', 'left-[14%]', 'w-3 h-3', '0s'], ['top-[20%]', 'right-[16%]', 'w-2 h-2', '1s'],
    ['top-[34%]', 'left-[8%]', 'w-2 h-2', '2s'],  ['top-[62%]', 'right-[10%]', 'w-3 h-3', '.6s'],
    ['bottom-[16%]', 'left-[22%]', 'w-2 h-2', '1.5s'], ['bottom-[26%]', 'right-[26%]', 'w-3 h-3', '2.4s'],
    ['top-[8%]', 'right-[40%]', 'w-2 h-2', '3s'],
  ]
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {pts.map(([t, h, s], i) => (
        <Sparkle key={i}
          className={`absolute ${t} ${h} ${s} ${dim ? 'text-gold-700/50' : 'text-gold-300'} motion-safe:animate-sparkle`}
        />
      ))}
    </div>
  )
})
