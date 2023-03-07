import React, { useState } from 'react';
import { Art } from '../artGallery/artTypes';
import styles from './ArtCard.module.css';
import { ReactComponent as CloseIcon } from '../../assets/icons/x.svg';

const ArtCard = (props: Art) => {
  const [fullsizeVisible, setFullsizeVisible] = useState(false);

  function toggleFullsizeVisible() {
    setFullsizeVisible(!fullsizeVisible);
  }

  const smallImageUrl = () => {
    if (props.width > 400) {
      let split = props.url.split('/');
      split.splice(4, 0, 'tr:w-400');
      return split.join('/');
    }
    return props.url;
  };

  const bigImageUrl = () => {
    if (props.width > 800) {
      let split = props.url.split('/');
      split.splice(4, 0, 'tr:w-800');
      return split.join('/');
    }
    return props.url;
  };

  return (
    <>
      <div className={styles.wrapper} onClick={toggleFullsizeVisible}>
        <img
          src={smallImageUrl()}
          alt={props.customMetadata.title}
          className={styles.card}
        />
        <div className={styles.layover}>
          <h3>{props.customMetadata.title}</h3>
        </div>
      </div>
      {fullsizeVisible && (
        <div className={styles.fullsizeWrapper}>
          <div
            className={styles.fullsizeBackground}
            onClick={toggleFullsizeVisible}
          >
            <CloseIcon className={styles.closeIcon} alt="close" />
          </div>
          <img
            src={bigImageUrl()}
            alt={props.customMetadata.title}
            className={styles.card}
          />
        </div>
      )}
    </>
  );
};

export default ArtCard;
