import React, { ReactNode, ElementType } from 'react'
import classNames from 'classnames'

const typeClassnames = {
  primary: 'text-white bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300',
  secondary:
    'text-blue-600 bg-blue-100 hover:bg-blue-200 disabled:text-blue-300 disabled:bg-blue-100',
}

const sizeClassnames = {
  small: 'py-1 px-2 text-sm',
  medium: 'py-2 px-4',
  large: 'py-3 px-5',
}

interface ButtonProps {
  type?: keyof typeof typeClassnames
  size?: keyof typeof sizeClassnames
  children: ReactNode
  icon?: ReactNode
  rightIcon?: ReactNode
  disabled?: boolean
  loading?: boolean
  as?: ElementType
}

const Button = React.forwardRef(
  <Tag extends keyof JSX.IntrinsicElements>(
    {
      children,
      icon,
      rightIcon,
      type = 'primary',
      size = 'medium',
      disabled,
      loading,
      as: Tag = 'button',
      className,
      ...props
    }: ButtonProps & JSX.IntrinsicElements[Tag],
    forwardedRef
  ) => {
    return (
      <Tag
        {...props}
        aria-busy={loading}
        disabled={disabled || loading}
        ref={forwardedRef}
        className={classNames(
          typeClassnames[type],
          sizeClassnames[size],
          'rounded-md',
          'font-semibold',
          'focus:outline-none',
          'focus:ring-4',
          'disabled:cursor-not-allowed',
          'relative',
          'inline-flex',
          'items-center',
          'justify-center',
          'cursor-pointer',
          className
        )}
      >
        <span
          className={`flex justify-center items-center ${
            loading ? 'opacity-0' : ''
          }`}
        >
          {icon && <span className="mr-1 fill-current w-5">{icon}</span>}
          {children}
          {rightIcon && (
            <span className="ml-1 fill-current w-5 ${loadingClass}">
              {rightIcon}
            </span>
          )}
        </span>
        {loading && (
          <svg
            className="animate-spin w-4 absolute"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
      </Tag>
    )
  }
)

Button.displayName = "Button"

export default Button
