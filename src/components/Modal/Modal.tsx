import { useRef } from 'react'
import ReactDOM from 'react-dom'
import useOnClickOutside from '../../hooks/use-click-outside'
import useKeyPressed from '../../hooks/use-key-pressed'
import CloseIcon from '../../icons/close.svg'

interface ModalContentProps {
  children: React.ReactNode
  onClose: () => void
}

const ModalContent = ({ onClose, children }: ModalContentProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useOnClickOutside(modalRef, onClose)
  useKeyPressed('Escape', onClose)

  return (
    <div
      className="bg-gray-100 px-4 py-5 rounded-md relative w-11/12 max-w-lg"
      ref={modalRef}
    >
      <CloseIcon
        className="absolute top-2 right-2 cursor-pointer hover:text-gray-700 fill-current"
        onClick={onClose}
      />
      {children}
    </div>
  )
}

interface ModalProps {
  children?: React.ReactNode
  open: boolean
  onClose: () => void
}

const Modal = ({ open, onClose, children }: ModalProps) => {
  return (
    open &&
    ReactDOM.createPortal(
      <div className="fixed bg-black bg-opacity-40 z-50 top-0 left-0 w-full h-full flex items-center justify-center">
        <ModalContent onClose={onClose}>{children}</ModalContent>
      </div>,
      document.body,
    )
  )
}

export default Modal
