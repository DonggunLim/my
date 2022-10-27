import React from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  width?: string;
}

const Modal = ({ children, onClose, width }: ModalProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if ((e.target! as HTMLDivElement).className.includes('modal_outer')) {
      onClose();
    }
  };
  return (
    <section className={styles.modal_outer} onClick={handleClick}>
      <div className={styles.modal_inner} style={{ width }}>
        {children}
      </div>
    </section>
  );
};

export default Modal;
