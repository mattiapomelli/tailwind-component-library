import { RefObject, useEffect, useRef } from 'react'

const useOnClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  callback: (event?: MouseEvent) => void,
) => {
  const savedCallback = useRef(callback)

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        savedCallback.current()
      }
    }

    window.addEventListener('mousedown', handleClick)

    return () => {
      window.removeEventListener('mousedown', handleClick)
    }
  }, [ref])
}

export default useOnClickOutside
