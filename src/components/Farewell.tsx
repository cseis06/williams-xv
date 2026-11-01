import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Stars } from './ui/Ornaments'
import { EVENT } from '../constants/data'

export default function Farewell() {
  const wrap = useRef<HTMLDivElement>(null)
  const sig = useRef<HTMLSpanElement>(null)
  const line = useRef<HTMLSpanElement>(null)
  useScrollAnimation(wrap)

  useEffect(() => {
    if (!sig.current || !line.current) return
    const ctx = gsap.context(() => {
      gsap.from(line.current!, {
        scrollTrigger: { trigger: sig.current as Element, start: 'top 80%', once: true },
        scaleX: 0, duration: 1.1, delay: 0.7, ease: 'power2.inOut', transformOrigin: 'center',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative z-10 py-28 px-6 bg-night-800 overflow-hidden">
      <Stars />
      <div ref={wrap} className="relative z-10 max-w-md mx-auto text-center">
        <p className="font-sans text-[0.65rem] tracking-[0.35em] uppercase text-sky-300 mb-12">Con amor</p>
        <p className="font-sans text-sm md:text-base text-ivory/85 leading-loose mb-14 font-light">
          Gracias por acompañarme en este día tan especial.<br />
          Tu presencia hace que este momento sea inolvidable.
        </p>
        <div className="inline-block">
          <span ref={sig} className="font-script text-6xl md:text-7xl text-gold-300 block leading-none mb-3">
            {EVENT.short}
          </span>
          <span ref={line} className="block h-px mx-auto w-3/4 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        </div>
      </div>
    </section>
  )
}
