import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { EVENT } from '../constants/data'

/* Minimal typing for the YouTube IFrame API */
interface YTPlayer {
  playVideo(): void
  pauseVideo(): void
  mute(): void
  unMute(): void
  setVolume(v: number): void
  destroy(): void
}
declare global {
  interface Window {
    YT?: { Player: new (el: HTMLElement, opts: unknown) => YTPlayer }
    onYouTubeIframeAPIReady?: () => void
  }
}

export interface MusicHandle { play: () => void }

interface Props { started: boolean }

const MusicPlayer = forwardRef<MusicHandle, Props>(function MusicPlayer({ started }, ref) {
  const hostRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<YTPlayer | null>(null)
  const readyRef = useRef(false)
  const wantPlayRef = useRef(false)
  const [muted, setMuted] = useState(false)

  const play = useCallback(() => {
    wantPlayRef.current = true
    if (readyRef.current && playerRef.current) {
      playerRef.current.unMute()
      playerRef.current.setVolume(70)
      playerRef.current.playVideo()
    }
  }, [])

  useImperativeHandle(ref, () => ({ play }), [play])

  useEffect(() => {
    const id = EVENT.music.youtubeId
    const create = () => {
      if (!hostRef.current || !window.YT) return
      playerRef.current = new window.YT.Player(hostRef.current, {
        width: '200', height: '200', videoId: id,
        playerVars: { autoplay: 0, controls: 0, loop: 1, playlist: id, playsinline: 1, rel: 0, modestbranding: 1 },
        events: {
          onReady: () => {
            readyRef.current = true
            if (wantPlayRef.current) play()
          },
        },
      })
    }

    if (window.YT?.Player) create()
    else {
      const prev = window.onYouTubeIframeAPIReady
      window.onYouTubeIframeAPIReady = () => { prev?.(); create() }
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const s = document.createElement('script')
        s.src = 'https://www.youtube.com/iframe_api'
        document.head.appendChild(s)
      }
    }
    return () => { playerRef.current?.destroy(); playerRef.current = null; readyRef.current = false }
  }, [play])

  const toggle = () => {
    const p = playerRef.current
    if (!p) return
    if (muted) { p.unMute(); p.playVideo() } else p.mute()
    setMuted(!muted)
  }

  return (
    <>
      {/* Reproductor oculto (solo audio) */}
      <div className="fixed -left-[9999px] top-0 w-[200px] h-[200px] overflow-hidden" aria-hidden="true">
        <div ref={hostRef} />
      </div>

      {started && (
        <button
          onClick={toggle}
          aria-label={muted ? 'Activar música' : 'Silenciar música'}
          className="fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full bg-night/90 text-gold-300 border border-gold-500/60 backdrop-blur flex items-center justify-center shadow-lg shadow-black/30 transition-colors hover:bg-night-600 focus-visible:outline-2 focus-visible:outline-gold-500"
        >
          {muted ? <VolumeX className="w-5 h-5" strokeWidth={1.5} /> : <Volume2 className="w-5 h-5" strokeWidth={1.5} />}
        </button>
      )}
    </>
  )
})

export default MusicPlayer
