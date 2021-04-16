import React from 'react'
import styles from './Toggle.module.css'
import classNames from 'classnames'

interface ToggleProps {
  label?: string
  checked?: boolean
  onToggle?: (event: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  id: string
}

const Toggle = ({ checked, onToggle, label, className, id }: ToggleProps) => {
  return (
    <label
      htmlFor={id}
      className={classNames(
        className,
        'flex items-center cursor-pointer relative',
      )}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className={classNames(styles.toggle, 'sr-only')}
      />
      <span className={classNames(styles.switch, 'relative')}>
        <span
          className={classNames(
            styles.track,
            'w-10 h-4 bg-gray-400 rounded-full shadow-inner block',
          )}
        />
        <span
          className={classNames(
            styles.knob,
            'absolute w-6 h-6 bg-gray-300 rounded-full -left-1 -top-1 transition',
          )}
        />
      </span>
      {label && (
        <span
          className={classNames(
            styles.label,
            'ml-2 font-bold select-none opacity-60',
          )}
        >
          {label}
        </span>
      )}
    </label>
  )
}

export default Toggle
