import React from 'react';
import style from './Layout.module.css';
import propTypes from 'prop-types';

export const Layout = ({children}) =>
  <div className={style.container}>{children}</div>;

Layout.propTypes = {
  children: propTypes.node,
};
