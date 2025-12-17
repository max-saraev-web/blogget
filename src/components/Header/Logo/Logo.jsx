import React from 'react';
import style from './Logo.module.css';
import logo from './img/logo.svg';
import {Link} from 'react-router';

export const Logo = () => (
  <>
    <Link className={style.link} to='/'>
      <img src={logo} alt="Логотип Blogget" />
    </Link>
  </>
);
