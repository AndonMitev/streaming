import React from 'react';
import { uploadImagesService } from '../../../services/common';

export const UploadToFirebase = ({ getUrls }) => {
  const onFileChange = async (event) => {
    const { files } = event.target;

    try {
      const urls = await uploadImagesService(files);

      getUrls(urls);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input type='file' onChange={onFileChange} multiple />{' '}
    </div>
  );
};
