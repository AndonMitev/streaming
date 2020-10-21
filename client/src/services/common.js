import { app } from '../config/firebase';

export const getStorage = () => app.storage().ref();

export const uploadImagesService = async (fileList) => {
  const deployedImages = await deployImages(fileList);

  return await getDownloadURLS(deployedImages);
};

const deployImages = async (fileList) => {
  const files = Object.values(fileList);

  const promises = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    let fileName = file.name;

    if (file.name.indexOf('.jpg') !== -1) {
      fileName = file.name.split('.jpg')[0] + Date.now() + '.jpg';
    }

    promises.push(getStorage().child(fileName).put(file));
  }

  return await Promise.all(promises);
};

const getDownloadURLS = async (deployedImages) => {
  const promises = [];

  for (let i = 0; i < deployedImages.length; i++) {
    const image = deployedImages[i];

    promises.push(image.ref.getDownloadURL());
  }

  return await Promise.all(promises);
};
