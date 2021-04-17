import Radio from './Radio'
import classNames from 'classnames'

interface RadioGroupProps {
  options: string[]
  onChange?: (value: string) => void
  className?: string
  value?: string
  label?: string
}

const RadioGroup = ({
  options,
  onChange,
  className,
  value,
  label,
}: RadioGroupProps) => {
  return (
    <div className={classNames('flex flex-col', className)}>
      {label && (
        <span className="block text-sm font-bold mb-1 text-gray-700">
          {label}
        </span>
      )}
      {options.map((option) => (
        <Radio
          key={option}
          id={option}
          onChange={() => onChange(option)}
          label={option}
          checked={option === value}
          name={label}
        />
      ))}
    </div>
  )
}

export default RadioGroup
