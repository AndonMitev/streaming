import React from 'react';
import { useHistory } from 'react-router-dom';

import { Form } from '../../../../common/Form';

import { loginService } from '../../../../../services/user';

import { updateLocalStorage } from '../../../../../services/localStorage';
import { LS_KEYS } from '../../../../../constants';
import { useUpdateUser } from '../../../../../context/user';

const LOGIN_MODEL = {
  email: 'test@abv.bg',
  password: '123456',
};

export const Login = () => {
  const history = useHistory();
  const updateUser = useUpdateUser();

  const onSubmit = async (formState) => {
    try {
      const { email, password } = formState;

      const { user } = await loginService(email, password);

      updateUser({
        email: user.email,
        uid: user.uid,
      });

      updateLocalStorage(LS_KEYS.TOKEN, user.uid);

      history.push(`/profile/${user.uid}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form fields={LOGIN_MODEL} onSubmit={onSubmit} />
    </div>
  );
};
