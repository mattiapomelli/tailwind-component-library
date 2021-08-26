import React, { useEffect, useRef, useState, ReactNode } from 'react'
import ArrowDown from '../../icons/arrowdown.svg'
import DropdownController from './controller'
import classNames from 'classnames'

interface DropdownProps {
  items: string[]
  selectedIndex: number
  onSelect: (index: number, value: string) => void
  label?: string
  id?: string
  icon?: ReactNode
  className?: string
  fullWidth?: boolean
}

const Dropdown = ({
  items,
  selectedIndex,
  onSelect,
  label,
  id,
  icon,
  className,
  fullWidth,
  ...props
}: DropdownProps) => {
  const itemsRefs = useRef<HTMLElement[]>([])
  const [open, setOpen] = useState(false)
  const controller = useRef<DropdownController>(null)
  const buttonRef = useRef<HTMLButtonElement>()
  const menuId = 'menu'

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'ArrowDown':
          controller.current.moveDown()
          break
        case 'ArrowUp':
          controller.current.moveUp()
          break
        case 'Escape':
          setOpen(false)
          break
      }
    }

    const close = () => setOpen(false)

    if (open) {
      window.addEventListener('keydown', handler)
      window.addEventListener('click', close)
      window.addEventListener('contextmenu', close)
      window.addEventListener('scroll', close)
      window.addEventListener('resize', close)
      controller.current = new DropdownController(itemsRefs.current)
    } else {
      buttonRef.current.focus()
    }

    return () => {
      window.removeEventListener('keydown', handler)
      window.removeEventListener('click', close)
      window.removeEventListener('contextmenu', close)
      window.removeEventListener('scroll', close)
      window.removeEventListener('resize', close)
      controller.current = null
    }
  }, [open])

  const toggle = () => {
    setOpen((open) => !open)
  }

  const selectItem = (index: number) => {
    onSelect(index, items[index])
    setOpen(false)
  }

  const trackRef = (index: number, node: HTMLElement) => {
    itemsRefs.current[index] = node
  }

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    index: number,
  ) => {
    if (e.code === 'Enter') {
      selectItem(index)
    }
  }

  return (
    <div
      className={classNames(
        'relative min-w-[120px] text-gray-800',
        { 'inline-block': !fullWidth },
        className,
      )}
      {...props}
    >
      {label && (
        <label
          className="block text-sm font-bold mb-1 text-gray-700"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <button
        className="bg-gray-200 hover:bg-gray-300 flex w-full py-2 items-center px-3 rounded-md focus:outline-none focus:ring-4"
        color="secondary"
        aria-expanded={open ? true : undefined}
        aria-haspopup
        aria-controls={menuId}
        onClick={toggle}
        type="button"
        ref={buttonRef}
        id={id}
      >
        {icon && <span className="mr-1 fill-current">{icon}</span>}
        {items[selectedIndex]}
        <ArrowDown className="text-sm ml-auto" />
      </button>
      {open && (
        <div
          className="absolute top-full mt-2 bg-gray-200 rounded-md w-full border border-gray-300"
          role="menu"
          id={menuId}
        >
          {items.map((item, index) => (
            <div
              ref={(node) => trackRef(index, node)}
              key={item}
              onClick={() => selectItem(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              role="menuitem"
              tabIndex={-1}
              className="py-1 px-4 hover:bg-gray-300 rounded-md focus:bg-gray-300 focus:outline-none cursor-pointer m-1"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
