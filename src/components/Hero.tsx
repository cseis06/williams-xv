import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { CrossIcon, Stars } from './ui/Ornaments'
import { EVENT } from '../constants/data'

export default function Hero({ started }: { started: boolean }) {
  const wrap = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!started || !wrap.current) return
    const items = wrap.current.querySelectorAll('[data-in]')
    const ctx = gsap.context(() => {
      gsap.set(items, { opacity: 0, y: 30 })
      gsap.to(items, { opacity: 1, y: 0, duration: 1, stagger: 0.18, ease: 'power3.out', delay: 0.7 })
    }, wrap)
    return () => ctx.revert()
  }, [started])

  return (
    <section className="sticky top-0 z-0 min-h-svh flex flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_30%,#24375E_0%,#14213D_55%,#0D1630_100%)]">
      <div className="rays" aria-hidden="true" />
      <Stars />

      <div ref={wrap} className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <div data-in className="flex justify-center mb-8">
          <CrossIcon className="w-9 h-12 text-gold-500 halo" />
        </div>
        <p data-in className="font-sans text-[0.65rem] md:text-xs tracking-[0.35em] uppercase text-sky-300 mb-6">
          Te invitamos a celebrar
        </p>
        <h1 data-in className="font-script text-6xl sm:text-8xl md:text-9xl text-gold-300 leading-none">
          {EVENT.firstName}
        </h1>
        <p data-in className="font-display text-3xl md:text-5xl text-ivory font-semibold tracking-[0.25em] uppercase mt-3 mb-8">
          {EVENT.lastName}
        </p>
        <div data-in className="flex items-center gap-4 justify-center mb-8">
          <div className="h-px w-14 bg-gradient-to-r from-transparent to-gold-500" />
          <span className="font-script text-4xl text-gold-500">XV años</span>
          <div className="h-px w-14 bg-gradient-to-l from-transparent to-gold-500" />
        </div>
        <div data-in className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-ivory/80">
          Domingo · 8 de Noviembre
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator" aria-hidden="true" />
    </section>
  )
}
