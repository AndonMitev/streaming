import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Login } from '../../pages/user/auth/Login';
import { Register } from '../../pages/user/auth/Register';
import { Profile } from '../../pages/user/Profile';

export const Main = () => {
  return (
    <section className='main'>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/register'>
          <Register />
        </Route>

        <Route path='/profile/:id'>
          <Profile />
        </Route>

        <Route path='/'>
          <Register />
        </Route>
      </Switch>
    </section>
  );
};
