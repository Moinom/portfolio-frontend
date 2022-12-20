import React from 'react';
import { Art } from '../artGallery/artTypes';

const ArtCard = (props: Art) => {
  return (
    <div>
      <img src={props.url} alt={props.name} />
    </div>
  );
};

export default ArtCard;
