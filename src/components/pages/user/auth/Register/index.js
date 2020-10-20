import React from 'react';

import { Form } from '../../../../common/Form';

import { registerService, setUserService } from '../../../../../services/user';

const REGISTER_MODEL = {
  email: 'test@abv.bg',
  password: '123456',
};

export const Register = () => {
  const onSubmit = async (formState) => {
    try {
      const { email, password } = formState;

      await registerService(email, password);

      // TODO: Learn how to set these defaults values from FIREBASE directly
      setUserService(email, {
        images: [],
        friends: [],
        profilePicture: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form fields={REGISTER_MODEL} onSubmit={onSubmit} />
    </div>
  );
};
