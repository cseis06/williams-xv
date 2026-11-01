import { useRef, useState } from 'react'
import { Gift, Copy, Check } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Divider } from './ui/Ornaments'
import { EVENT } from '../constants/data'

export default function Gifts() {
  const ref = useRef<HTMLDivElement>(null)
  useScrollAnimation(ref)
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try { await navigator.clipboard.writeText(EVENT.gifts.alias) } catch { /* sin permisos */ }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative z-10 py-24 px-6 bg-ivory">
      <div ref={ref} className="max-w-md mx-auto text-center">
        <p className="font-sans text-[0.65rem] tracking-[0.35em] uppercase text-gold-700 mb-5">Detalle</p>
        <Gift className="w-9 h-9 text-gold-500 mx-auto mb-5" strokeWidth={1.3} />
        <h2 className="font-display text-4xl md:text-5xl font-bold text-night mb-5">Formas de regalar</h2>
        <div className="mb-8"><Divider /></div>
        <p className="font-sans text-sm md:text-base text-ink-soft leading-loose font-light mb-8">{EVENT.gifts.text}</p>

        <div className="inline-flex flex-col items-center gap-3 rounded-2xl border border-gold-500/60 bg-white/60 px-8 py-6">
          <span className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-gold-700">Alias</span>
          <span className="font-display text-4xl font-bold text-night tracking-wider">{EVENT.gifts.alias}</span>
          <button onClick={copy}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-night text-ivory text-sm font-sans transition-colors hover:bg-night-600 focus-visible:outline-2 focus-visible:outline-gold-500">
            {copied ? <Check className="w-4 h-4" strokeWidth={1.8} /> : <Copy className="w-4 h-4" strokeWidth={1.5} />}
            {copied ? 'Copiado' : 'Copiar alias'}
          </button>
        </div>
      </div>
    </section>
  )
}
