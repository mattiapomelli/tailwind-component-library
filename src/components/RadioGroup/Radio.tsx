import { InputHTMLAttributes } from 'react'
import styles from './Radio.module.css'
import classNames from 'classnames'

interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  className?: string
  id: string
}

const Radio = ({
  checked,
  onChange,
  label,
  className,
  id,
  ...props
}: RadioProps) => {
  return (
    <label
      htmlFor={id}
      className={classNames(
        styles.container,
        'inline-flex items-center cursor-pointer select-none',
        className,
      )}
    >
      <input
        id={id}
        checked={checked}
        onChange={onChange}
        type="radio"
        className={classNames(styles.radio, 'w-0 h-0 opacity-0')}
        {...props}
      />
      <span className={classNames(styles.checkmark, 'w-7 h-7 rounded-lg p-1')}>
        <span
          className={classNames(
            styles.ring,
            'w-full h-full flex rounded-full border-2 border-gray-300',
          )}
        />
      </span>
      {label && (
        <span
          className={classNames(
            styles.label,
            'ml-1 font-bold select-none opacity-60 text-sm',
          )}
        >
          {label}
        </span>
      )}
    </label>
  )
}

export default Radio
