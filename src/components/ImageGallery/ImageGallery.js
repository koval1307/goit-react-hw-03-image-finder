import React from 'react';
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem';
import styles from "../ImageGalleryItem/image-gallery.module.css";

function ImageGallery({ gallery, onToggleModal, getId }) {
  return (
    <ul className={styles.ImageGallery}>
      {gallery.map(image => (
        <ImageGalleryItem
          image={image}
          key={image.id}
          onToggleModal={onToggleModal}
          getId={getId}
        />
      ))}
    </ul>
  );
}

export default ImageGallery;