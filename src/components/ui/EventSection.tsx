import { type ReactNode, useRef } from 'react'
import { MapPin, Clock, Calendar, MessageCircle } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { Divider } from './Ornaments'

interface Props {
  eyebrow: string
  icon: ReactNode
  title: string
  date: string
  time: string
  venue: string
  mapsUrl: string
  whatsappUrl: string
  whatsappLabel: string
  tone: 'light' | 'dark'
}

export default function EventSection({ eyebrow, icon, title, date, time, venue, mapsUrl, whatsappUrl, whatsappLabel, tone }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  useScrollAnimation(ref)
  const dark = tone === 'dark'

  const text = dark ? 'text-ivory/90' : 'text-ink-soft'
  const head = dark ? 'text-gold-300' : 'text-night'

  return (
    <section className={`relative z-10 py-24 px-6 ${dark ? 'bg-night' : 'bg-sky-100'}`}>
      <div ref={ref} className="max-w-md mx-auto text-center min-h-[60dvh] flex flex-col items-center justify-center">
        <p className={`font-sans text-[0.65rem] tracking-[0.35em] uppercase mb-5 ${dark ? 'text-sky-300' : 'text-gold-700'}`}>{eyebrow}</p>
        <div className="flex justify-center mb-5 text-gold-500">{icon}</div>
        <h2 className={`font-display text-5xl md:text-6xl font-bold mb-5 ${head}`}>{title}</h2>
        <div className="mb-10"><Divider /></div>

        <div className="space-y-4 mb-10">
          {[
            [Calendar, date], [Clock, time], [MapPin, venue],
          ].map(([Icon, v], i) => {
            const I = Icon as typeof Calendar
            return (
              <div key={i} className="flex items-center gap-3 justify-center">
                <I className="w-4 h-4 text-gold-500 shrink-0" strokeWidth={1.5} />
                <span className={`font-sans text-sm md:text-base ${text}`}>{v as string}</span>
              </div>
            )
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full border text-sm font-sans tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-gold-500 ${
              dark ? 'border-gold-500 text-gold-300 hover:bg-gold-500 hover:text-night'
                   : 'border-night text-night hover:bg-night hover:text-ivory'}`}>
            <MapPin className="w-4 h-4" strokeWidth={1.5} /> Ver ubicación
          </a>
          {whatsappUrl && (
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gold-500 text-night text-sm font-sans font-medium tracking-wide transition-colors hover:bg-gold-300 focus-visible:outline-2 focus-visible:outline-gold-300">
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} /> {whatsappLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
