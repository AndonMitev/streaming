import React from 'react';
import { Link } from 'react-router-dom';

import { LS_KEYS, NAV_LINKS } from '../../../constants';
import { getFromLocalStorage } from '../../../services/localStorage';

import './style.scss';

const { LOGIN, REGISTER, PROFILE } = NAV_LINKS;

export const Navbar = () => {
  return (
    <aside className='navbar'>
      <Link to={LOGIN.LINK}>{LOGIN.VIEW}</Link>
      <Link to={REGISTER.LINK}>{REGISTER.VIEW}</Link>
      <Link to={PROFILE.LINK + `/${getFromLocalStorage(LS_KEYS.TOKEN)}`}>
        {PROFILE.VIEW}
      </Link>
    </aside>
  );
};
