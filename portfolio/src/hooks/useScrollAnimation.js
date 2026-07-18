import { useRef } from 'react'
import { useInView } from 'framer-motion'

/**
 * useScrollAnimation — convenience hook that returns a ref and inView boolean.
 * Used to trigger entrance animations when an element enters the viewport.
 */
const useScrollAnimation = (options = {}) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2, ...options })
  return { ref, inView }
}

export default useScrollAnimation
