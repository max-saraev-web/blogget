import React from 'react';
import style from './Search.module.css';
import SVG from '../../Mixins/SVG/index';

import searchPic from './img/search.svg';

export const Search = () => (
  <>
    <form className={style.form} action="">
      <input className={style.search} type="search" />
      <button className={style.button}>
        <SVG path={searchPic}/>
      </button>
    </form>
  </>
);
