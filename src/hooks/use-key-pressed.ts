import { useEffect, useRef } from 'react'

const useKeyPressed = (
  key: string,
  callback: (event?: KeyboardEvent) => void,
) => {
  const callbackRef = useRef(callback)
  const pressing = useRef(false)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.code === key && !pressing.current) {
        pressing.current = true
        callbackRef.current(event)
      }
    }

    const keyUpHandler = (event: KeyboardEvent) => {
      if (event.code === key) {
        pressing.current = false
      }
    }

    document.addEventListener('keydown', keyDownHandler)
    document.addEventListener('keyup', keyUpHandler)

    return () => {
      document.removeEventListener('keydown', keyDownHandler)
      document.removeEventListener('keyup', keyUpHandler)
    }
  }, [key])
}

export default useKeyPressed
