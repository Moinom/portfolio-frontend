import React from 'react';
import { Art } from '../artGallery/artTypes';
import styles from './ArtCard.module.css';

const ArtCard = (props: Art) => {
  return (
    <div>
      <img src={props.url} alt={props.name} className={styles.card} />
    </div>
  );
};

export default ArtCard;
