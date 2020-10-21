import React from 'react';
import AWS from 'aws-sdk';
import CONFIG from '../../../env';

const s3 = new AWS.S3({
  accessKeyId: CONFIG.AWS_ID,
  secretAccessKey: CONFIG.AWS_SECRET,
});

console.log(s3);

export const UploadToAWS = () => {
  const onFileChange = async (event) => {
    const file = event.target.files[0];

    console.log(file);

    const buffer = Buffer.from(file);

    console.log(buffer);

    // const params = {
    //   bucket: CONFIG.AWS_BUCKET,

    // }

    try {
      // s3.upload()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        type='file'
        onChange={onFileChange}
        multiple
        encType='multipart/form-data'
      />
    </div>
  );
};
