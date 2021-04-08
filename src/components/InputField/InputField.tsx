import React, { ReactNode, SyntheticEvent, useRef, useState } from 'react'
import classNames from 'classnames'
import { InputHTMLAttributes } from 'react'
import useInputValidation from '../../hooks/use-input-validation'

const iconClass =
  'absolute text-gray-500 text-lg fill-current top-1/2 transform -translate-y-1/2'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode
  rightIcon?: ReactNode
  label?: string
  fullWidth?: boolean
  hint?: string
  inputId?: string
  onValueChange?: (value: string) => void
  onValidityChange?: (valid: boolean) => void
  validate?: (value: string) => boolean
}

const InputField = ({
  className,
  icon,
  rightIcon,
  label,
  hint,
  fullWidth = false,
  inputId,
  onValueChange,
  onValidityChange,
  validate,
  maxLength,
  ...props
}: InputFieldProps) => {
  const [valueLength, setValueLength] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const { isValid, onInput: baseOnInput, onBlur } = useInputValidation(
    inputRef,
    validate,
    onValidityChange,
  )

  const onInput = (
    event: SyntheticEvent<HTMLInputElement, InputEvent>,
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
          htmlFor={inputId}
        >
          {label}
        </label>
      )}
      <div className="relative">
        {icon && <span className={`${iconClass} left-2`}>{icon}</span>}
        <input
          id={inputId}
          ref={inputRef}
          onBlur={onBlur}
          onInput={onInput}
          maxLength={maxLength}
          {...props}
          className={classNames(
            'bg-gray-50',
            'py-2',
            'px-3',
            { 'pl-8': icon },
            { 'pr-8': rightIcon },
            'border',
            'border-gray-200',
            'rounded-md',
            'focus:outline-none',
            'focus:ring',
            'placeholder-gray-500',
            'focus:border-blue-300',
            'w-full',
            {
              'ring-1 ring-red-500 ring-opacity-60 focus:border-red-400': !isValid,
            },
            className,
          )}
        />
        {rightIcon && (
          <span className={`${iconClass} right-2`}>{rightIcon}</span>
        )}
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

export default InputField
