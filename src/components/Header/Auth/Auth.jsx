import React, {useContext, useState} from 'react';
import style from './Auth.module.css';
import SVG from '../../Mixins/SVG/index';
import {Text} from '../../../UI/Text';
import {urlAuth} from '../../../api/auth';
import loginPic from './img/login.svg';
import {authContext} from '../../../context/authContext';
import {useDispatch, useSelector} from 'react-redux';
import {delToken} from '../../../store';


export const Auth = () => {
  const dispatch = useDispatch();
  const {auth, setAuth} = useContext(authContext);
  const [showLogout, setShowLogout] = useState(false);
  const tokennn = useSelector(state => state.token);


  const logoutSwitch = () => setShowLogout(current => !current);

  const handleLogout = () => {
    setAuth({});
    console.log('state до', tokennn);
    dispatch(delToken());
    // console.log('state после', useSelector(state => state.token));
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
          {showLogout &&
          <div
            role='button'
            onClick={handleLogout}
            className={style.logout}>
          Выйти
          </div>}
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

