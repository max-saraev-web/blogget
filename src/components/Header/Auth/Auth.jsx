import React from 'react';
import style from './Auth.module.css';
import SVG from '../../Mixins/SVG/index';
import PropTypes from 'prop-types';

import loginPic from './img/login.svg';

export const Auth = ({auth}) => (
  <button className={style.button}>
    {!auth && <SVG
      className={style.svg}
      path={loginPic} fill/>}
  </button>
);

Auth.propTypes = {
  auth: PropTypes.bool,
};
