import { PartyPopper } from 'lucide-react'
import EventSection from './ui/EventSection'
import { EVENT } from '../constants/data'

export default function Party() {
  return (
    <EventSection tone="dark" eyebrow="El festejo" icon={<PartyPopper className="w-10 h-10" strokeWidth={1.2} />}
      title="La Fiesta" {...EVENT.party} whatsappLabel="Confirmar asistencia" />
  )
}
