import { useRef, useState } from 'react'
import Gate from './components/Gate'
import MusicPlayer, { type MusicHandle } from './components/MusicPlayer'
import Hero from './components/Hero'
import Dedication from './components/Dedication'
import Ceremony from './components/Ceremony'
import Party from './components/Party'
import Gifts from './components/Gifts'
import Farewell from './components/Farewell'

export default function App() {
  const [started, setStarted] = useState(false)
  const music = useRef<MusicHandle>(null)

  const open = () => {
    music.current?.play() // se ejecuta dentro del click del usuario
    setStarted(true)
  }

  return (
    <main className="bg-ivory font-sans text-ink">
      <Gate onOpen={open} />
      <MusicPlayer ref={music} started={started} />
      <Hero started={started} />
      <Dedication />
      <Ceremony />
      <Party />
      <Gifts />
      <Farewell />
    </main>
  )
}
