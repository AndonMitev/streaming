import React from 'react';

import './style.scss';

export const Gallery = ({ imagesUrls }) => {
  return imagesUrls ? (
    <div className='gallery'>
      {imagesUrls.map((image) => (
        <div key={image}>
          <img src={image} alt={image} />
        </div>
      ))}
    </div>
  ) : null;
};
