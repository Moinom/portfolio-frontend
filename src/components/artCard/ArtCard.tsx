import React from 'react';
import { Art } from '../artGallery/artTypes';
import styles from './ArtCard.module.css';

const ArtCard = (props: Art) => {
  return (
    <div className={styles.wrapper}>
      <img src={props.url} alt={props.name} className={styles.card} />
      <div className={styles.layover}>
        <h3>{props.customMetadata.title}</h3>
      </div>
    </div>
  );
};

export default ArtCard;
