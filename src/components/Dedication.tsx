import { useRef } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Divider, CornerFrame } from './ui/Ornaments'
import { EVENT } from '../constants/data'

export default function Dedication() {
  const ref = useRef<HTMLDivElement>(null)
  useScrollAnimation(ref)
  return (
    <section className="relative z-10 py-28 px-6 bg-ivory overflow-hidden">
      <CornerFrame />
      <div ref={ref} className="relative max-w-md mx-auto text-center">
        <p className="font-sans text-[0.65rem] tracking-[0.35em] uppercase text-gold-700 mb-8">Con la bendición de Dios</p>
        <div className="font-display text-2xl md:text-3xl text-night leading-relaxed italic mb-10">
          {EVENT.dedication.map((l) => <p key={l}>{l}</p>)}
        </div>
        <Divider />
        <p className="font-sans text-sm md:text-base text-ink-soft leading-loose font-light mt-10">
          {EVENT.invitation}
        </p>
      </div>
    </section>
  )
}
