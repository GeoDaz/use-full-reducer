import { useEffect, useRef } from 'react'

export function usePrevious(...args) {
  const ref = useRef(args)
  useEffect(() => {
    ref.current = args
  })
  return ref.current
}

export default usePrevious
