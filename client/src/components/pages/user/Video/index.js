import React from 'react';

import './style.scss';

export const Video = ({ videoLink }) => {
  const rightPart = videoLink.split('/o/')[1];
  const fileName = rightPart.split('mp4')[0] + 'mp4';
  return (
    <div className='video-wrapper'>
      <h3>{decodeURI(fileName)}</h3>

      <video width='500' controls>
        <source src={videoLink} type='video/mp4' />
        Your browser does not support HTML video.
      </video>
    </div>
  );
};
