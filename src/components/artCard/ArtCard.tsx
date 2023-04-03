import React, { useState } from 'react';
import { Art } from '../../utils/types';
import styles from './ArtCard.module.css';
import { ReactComponent as CloseIcon } from '../../assets/icons/x.svg';

interface Props {
  art: Art;
  desktopView: boolean;
}

const ArtCard = ({ art, desktopView }: Props) => {
  const [fullsizeVisible, setFullsizeVisible] = useState(false);

  function toggleFullsizeVisible() {
    desktopView && setFullsizeVisible(!fullsizeVisible);
  }

  const smallImageUrl = () => {
    if (art.width > 400) {
      let split = art.url.split('/');
      split.splice(4, 0, 'tr:w-400');
      return split.join('/');
    }
    return art.url;
  };

  const bigImageUrl = () => {
    if (art.width > 800) {
      let split = art.url.split('/');
      split.splice(4, 0, 'tr:w-800');
      return split.join('/');
    }
    return art.url;
  };

  return (
    <>
      <div
        className={styles.wrapper}
        onClick={toggleFullsizeVisible}
        data-testid="previewWrapper"
      >
        <img src={smallImageUrl()} alt={art.title} className={styles.card} />
        <div className={styles.layover}>
          <h3>{art.title}</h3>
        </div>
      </div>
      {fullsizeVisible && desktopView && (
        <div className={styles.fullsizeWrapper} data-testid="fullsizeWrapper">
          <div
            className={styles.fullsizeBackground}
            onClick={toggleFullsizeVisible}
          >
            <CloseIcon className={styles.closeIcon} title="close" />
          </div>
          <div className={styles.imageWrapper}>
            <img src={bigImageUrl()} alt={art.title} className={styles.card} />
            <p>{art.title}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ArtCard;
