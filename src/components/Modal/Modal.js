import React from 'react'
import styles from './modal.module.css'
 


function Modal({ onToggleModal, getLargeImage }) {
  const handleImageClick = () => {
      onToggleModal();
      
  };

  return (
    <div className={styles.Overlay} onClick={handleImageClick}>
      <div className={styles.Modal}>
        <img src={getLargeImage()} alt="" />
      </div>
    </div>
  );
}

export default Modal;