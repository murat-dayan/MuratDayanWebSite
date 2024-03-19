import React from 'react';
import './ImageCard.css';

const ImageCard = ({ image, text }) => {
  return (
    <div className="image-text-div">
      <img src={image} alt={text} />
      <p>{text}</p>
    </div>
  );
};

export default ImageCard;