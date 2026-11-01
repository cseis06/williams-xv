import EventSection from './ui/EventSection'
import { CrossIcon } from './ui/Ornaments'
import { EVENT } from '../constants/data'

export default function Ceremony() {
  return (
    <EventSection tone="light" eyebrow="En la Iglesia" icon={<CrossIcon className="w-8 h-11" />}
      title="La Misa" {...EVENT.ceremony} whatsappLabel="Confirmar asistencia" />
  )
}
