import { InputHTMLAttributes } from 'react'
import styles from './Checkbox.module.css'
import CheckIcon from '../../icons/check.svg'
import classNames from 'classnames'

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  className?: string
  id: string
}

const Checkbox = ({
  checked,
  onChange,
  label,
  className,
  id,
  ...props
}: CheckboxProps) => {
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
        type="checkbox"
        className={classNames(styles.checkbox, 'w-0 h-0 opacity-0')}
        {...props}
      />
      <span
        className={classNames(
          styles.checkmark,
          'w-5 h-5 rounded-md border-2 border-gray-200',
        )}
      >
        <CheckIcon
          className={classNames(styles.icon, 'w-full h-full opacity-0')}
        />
      </span>
      {label && (
        <span
          className={classNames(
            styles.label,
            'ml-2 font-bold select-none opacity-60 text-sm',
          )}
        >
          {label}
        </span>
      )}
    </label>
  )
}

export default Checkbox
