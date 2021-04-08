import React, {
  SyntheticEvent,
  TextareaHTMLAttributes,
  useRef,
  useState,
} from 'react'
import classNames from 'classnames'
import useInputValidation from '../../hooks/use-input-validation'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  fullWidth?: boolean
  hint?: string
  textareaId?: string
  onValueChange?: (value: string) => void
  onValidityChange?: (valid: boolean) => void
  validate?: (value: string) => boolean
}

const TextArea = ({
  className,
  label,
  hint,
  fullWidth = false,
  textareaId,
  onValueChange,
  onValidityChange,
  validate,
  maxLength,
  ...props
}: TextAreaProps) => {
  const [valueLength, setValueLength] = useState(0)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const { isValid, onInput: baseOnInput, onBlur } = useInputValidation(
    textareaRef,
    validate,
    onValidityChange,
  )

  const onInput = (
    event: SyntheticEvent<HTMLTextAreaElement, InputEvent>,
  ): void => {
    baseOnInput()
    const { value } = event.currentTarget

    if (onValueChange) {
      onValueChange(value)
    }

    setValueLength(value.length)
  }

  return (
    <div className={classNames({ 'inline-block': !fullWidth })}>
      {label && (
        <label
          className="block text-sm font-bold mb-1 text-gray-700"
          htmlFor={textareaId}
        >
          {label}
        </label>
      )}
      <div className="relative">
        <textarea
          id={textareaId}
          ref={textareaRef}
          onBlur={onBlur}
          onInput={onInput}
          maxLength={maxLength}
          {...props}
          className={classNames(
            'bg-gray-50',
            'py-2',
            'px-3',
            'border',
            'border-gray-200',
            'rounded-md',
            'focus:outline-none',
            'focus:ring',
            'placeholder-gray-500',
            'focus:border-blue-300',
            'w-full',
            {
              'ring-1 ring-red-500 ring-opacity-60 focus:border-red-400':
                isValid === false,
            },
            className,
          )}
        />
      </div>
      <div className="flex justify-end items-center text-xs">
        {isValid === false && (
          <div className="text-red-500 ml-1 flex-1" role="alert">
            {hint}
          </div>
        )}
        {maxLength && (
          <div className="mr-1">
            {valueLength}/{maxLength}
          </div>
        )}
      </div>
    </div>
  )
}

export default TextArea
