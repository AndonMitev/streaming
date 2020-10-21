import React from 'react';
import { useGetUser } from '../../../../context/user';

import { Tabs } from './Tabs';

import './style.scss';
import { Video } from '../Video';
import { UploadToAWS } from '../../../common/UploadToAWS';

export const Profile = () => {
  const { email, images } = useGetUser();

  return (
    <div className='profile-page'>
      <div>
        <Tabs />
      </div>
      <UploadToAWS />
      {/* {images?.length ? <Video videoLink={images[0]} /> : null} */}
    </div>
  );
};
