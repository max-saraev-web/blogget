import React from 'react';
import style from './Logo.module.css';
import logo from './img/logo.svg';

export const Logo = () => {
  return (
    <>
      <a className={style.link} href="/" onClick={()=>{}}>
        <img src={logo} alt="Логотип Blogget" />
      </a>
    </>
  )
}