import React from 'react';
import { useGetUser } from '../../../../context/user';

import { updateUserService } from '../../../../services/user';

import { UploadMultipleFiles } from '../../../common/UploadMultipleFiles';

import { Tabs } from './Tabs';

import './style.scss';
import { Video } from '../Video';

export const Profile = () => {
  const { email, images } = useGetUser();

  const getUrls = (urls) => {
    updateUserService(email, { images: [...urls, ...images] });
  };

  return (
    <div className='profile-page'>
      <div>
        <Tabs />
      </div>
      <UploadMultipleFiles getUrls={getUrls} />

      {images?.length ? <Video videoLink={images[0]} /> : null}
    </div>
  );
};
