import { useCallback, useEffect } from 'react'
import ReactDOM from 'react-dom'

import sprite from '../../../public/icons/sprite.svg'

import {
    ContentWrapper,
    StyledCloseButton,
    StyledWrapper,
} from './Modal.Styled.ts'

const rootModal = document.querySelector('#modal')

interface ModalProps {
    children: React.ReactNode
    closeModal: () => void
}

const Modal: React.FC<ModalProps> = ({ children, closeModal }) => {
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeModal()
            }
        },
        [closeModal]
    )
  
  useEffect(() => {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'

      return () => {
          document.removeEventListener('keydown', handleKeyDown)
          document.body.style.overflow = 'visible'
      }
  }, [closeModal, handleKeyDown])

  const handleBackDrop = ({
      currentTarget,
      target,
  }: React.MouseEvent<HTMLDivElement>) => {
      if (currentTarget === target) {
          closeModal()
      }
  }
  
    if (rootModal) {
        return ReactDOM.createPortal(
            <StyledWrapper onClick={handleBackDrop}>
                <ContentWrapper>
                    <StyledCloseButton
                        type="button"
                        title="modal close button"
                        onClick={closeModal}
                    >
                        <svg>
                            <use xlinkHref={`${sprite}#icon-close-modal`}></use>
                        </svg>
                    </StyledCloseButton>
                    {children}
                </ContentWrapper>
            </StyledWrapper>,
            rootModal
        )
    }
}

export default Modal
