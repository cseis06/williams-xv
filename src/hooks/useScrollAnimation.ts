import { useEffect, useRef, type RefObject } from 'react'
import { gsap } from 'gsap'
//import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface Options {
  y?: number
  duration?: number
  delay?: number
  start?: string
}

export function useScrollAnimation(
  ref: RefObject<Element | null>,
  opts: Options = {},
) {
  const optsRef = useRef(opts)
  optsRef.current = opts

  useEffect(() => {
    if (!ref.current) return

    const { y = 40, duration = 0.9, delay = 0, start = 'top 85%' } = optsRef.current

    const ctx = gsap.context(() => {
      gsap.from(ref.current!, {
        scrollTrigger: {
          trigger: ref.current as Element,
          start,
          once: true,
        } satisfies ScrollTrigger.Vars,
        opacity: 0,
        y,
        duration,
        delay,
        ease: 'power3.out',
      })
    })

    return () => ctx.revert()
  }, [ref])
}
