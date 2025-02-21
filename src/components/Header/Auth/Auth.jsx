import React, {useEffect, useState} from 'react';
import style from './Auth.module.css';
import SVG from '../../Mixins/SVG/index';
import PropTypes from 'prop-types';
import {Text} from '../../../UI/Text';
import {urlAuth} from '../../../api/auth';
import {URL_API} from '../../../api/const';

import loginPic from './img/login.svg';

export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useState({});
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    if (!token) return;


    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`
      },
    }).then(rsp => {
      if (rsp.status === 401) return;
      return rsp.json();
    })
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch(err => {
        console.error(err);
        setAuth({});
      });
  }, [token]
  );

  const logoutSwitch = () => setLogout(current => !current);

  const handleLogout = () => {
    setAuth({});
    delToken();
    window.location.href = 'http://localhost:3000';
  };

  return (
    <div className={style.container}>
      {auth.name ?
      (
        <button
          onClick={logoutSwitch}
          className={style.btn}>
          <img
            className={style.img}
            src={auth.img} title={auth.name} alt={` Аватар ${auth.name}`}/>
          {logout &&
          <a
            role='button'
            onClick={handleLogout}
            className={style.logout}>
          Выйти
          </a>}
        </button>
      ) :
      (<Text
        className={style.authLink}
        As='a'
        href={urlAuth}>
        <SVG
          className={style.svg}
          path={loginPic} fill/>
      </Text>)}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
