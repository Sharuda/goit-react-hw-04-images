import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, image }) => {
  useEffect(() => {
    const keyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', keyDown);

    return () => {
      window.removeEventListener('keydown', keyDown);
    };
  }, [onClose]);

  const onOverlayClose = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  const { largeImageURL } = image;
  return createPortal(
    <Overlay onClick={onOverlayClose}>
      <ModalContent>
        <img src={largeImageURL} alt="img" />
      </ModalContent>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  image: PropTypes.object,
  onClose: PropTypes.func,
};
