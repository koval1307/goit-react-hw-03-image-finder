import React from "react";
import styles from "./image-gallery.module.css";

export function ImageGalleryItem({ image, onToggleModal, getId }) {
  const onImageClick = (id) => {
    onToggleModal();
    getId(id);
  };

  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={image.webformatURL}
        alt=""
        id={image.id}
        className={styles.GalleryItemImage}
        onClick={() => onImageClick(image.id)}
      />
    </li>
  );
}


