import { useState, useEffect, useRef, RefObject } from 'react'

const useInputValidation = (
  inputRef: RefObject<HTMLInputElement | HTMLTextAreaElement>,
  validate?: (value: string) => boolean,
  onValidityChange?: (valid: boolean) => void,
) => {
  const [isValid, setIsValid] = useState<boolean>(undefined)
  const timeoutId = useRef<number>(null)

  useEffect(() => window.clearTimeout(timeoutId.current), [])

  useEffect(() => {
    if (onValidityChange && isValid !== undefined) {
      onValidityChange(isValid)
    }
  }, [isValid, onValidityChange])

  const checkValidity = () => {
    return validate
      ? validate(inputRef.current.value)
      : inputRef.current.checkValidity()
  }

  const onInput = () => {
    window.clearTimeout(timeoutId.current)

    const valid = checkValidity()

    if (valid) {
      setIsValid(true)
    } else {
      timeoutId.current = window.setTimeout(() => {
        setIsValid(checkValidity())
      }, 1500)
    }
  }

  const onBlur = () => {
    if (inputRef.current) {
      setIsValid(checkValidity())
    }
  }

  return {
    inputRef,
    isValid: isValid !== false,
    onInput,
    onBlur,
  }
}

export default useInputValidation
