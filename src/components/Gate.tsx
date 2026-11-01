import { useRef } from 'react'
import { gsap } from 'gsap'
import { CrossIcon, CornerFrame, Stars } from './ui/Ornaments'
import { EVENT } from '../constants/data'

export default function Gate({ onOpen }: { onOpen: () => void }) {
  const ref = useRef<HTMLDivElement>(null)

  const open = () => {
    onOpen() // dentro del click: inicia la música
    gsap.to(ref.current, {
      opacity: 0, scale: 1.06, duration: 1.2, ease: 'power2.inOut',
      onComplete: () => { if (ref.current) ref.current.style.display = 'none' },
    })
  }

  return (
    <div ref={ref} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-night-800 text-center px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,#24375E_0%,#0D1630_70%)]" />
      <Stars />
      <CornerFrame />
      <div className="relative z-10 flex flex-col items-center">
        <CrossIcon className="w-10 h-14 text-gold-500 mb-8 halo" />
        <p className="font-sans text-[0.65rem] tracking-[0.4em] uppercase text-sky-300 mb-4">Estás invitado a</p>
        <h1 className="font-script text-6xl text-gold-300 leading-none mb-2">Mis XV años</h1>
        <p className="font-display text-xl text-ivory/80 tracking-widest mb-12">{EVENT.short}</p>
        <button
          onClick={open}
          className="px-9 py-3.5 rounded-full border border-gold-500 text-gold-300 font-sans text-sm tracking-[0.25em] uppercase transition-colors hover:bg-gold-500 hover:text-night focus-visible:outline-2 focus-visible:outline-gold-300 bg-night/40"
        >
          Abrir invitación
        </button>
        <p className="font-sans text-[0.65rem] text-sky-300/70 mt-6 tracking-wider">♪ Con música</p>
      </div>
    </div>
  )
}
