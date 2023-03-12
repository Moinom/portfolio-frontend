import React from 'react';
import { Code } from '../codeGallery/codeTypes';
import styles from './CodeCard.module.css';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow-right.svg';

const CodeCard = (props: Code) => {
  const smallImageUrl = () => {
    if (props.width > 400) {
      let split = props.url.split('/');
      split.splice(4, 0, 'tr:w-400');
      return split.join('/');
    }
    return props.url;
  };

  return (
    <div className={styles.wrapper}>
      <h2>{props.title}</h2>
      <img src={smallImageUrl()} alt={props.title} className={styles.image} />
      <p>{props.description}</p>
      <p>
        <strong>Tech stack:</strong>{' '}
        {props.language
          ?.split(',')
          .map((tech) => tech.substring(0, 1).toUpperCase() + tech.substring(1))
          .join(', ')}
      </p>
      <div className={styles.links}>
        {props.prod && (
          <a href={props.prod} target="_blank" rel="noreferrer">
            <ArrowRight /> <span>Check it out</span>
          </a>
        )}
        <a href={props.github} target="_blank" rel="noreferrer">
          <ArrowRight /> <span>See the code</span>
        </a>
      </div>
    </div>
  );
};

export default CodeCard;
