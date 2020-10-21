import React from 'react';

import './style.scss';

export const Picture = ({ profilePicture }) => {
  return (
    <section className='profile-picture'>
      <img src={profilePicture} alt={profilePicture} />
    </section>
  );
};
