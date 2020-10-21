import React from 'react';
import ReactStars from 'react-rating-stars-component';

import './style.scss';

export const Test = () => {
  return (
    <section className='profile-section'>
      <div>
        <p>Andon Mitev</p>
        <p>Age: 26</p>
      </div>

      <div>
        <div className='stars-wrapper'>
          <ReactStars
            value={2.5}
            half={true}
            count={5}
            onChange={() => {}}
            size={40}
            activeColor='rgb(51 156 218)'
          />
        </div>
        <p>3.5 Rating</p>
      </div>

      <div className='buttons-wrapper'>
        <button>Add as friend</button>
        <button>Message</button>
      </div>
    </section>
  );
};
