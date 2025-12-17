import React, {useState} from 'react';
import style from './Auth.module.css';
import SVG from '../../Mixins/SVG/index';
import {Text} from '../../../UI/Text';
import {urlAuth} from '../../../api/auth';
import loginPic from './img/login.svg';
import {useDispatch} from 'react-redux';
import {delToken} from '../../../store/token/action';
import {setToken} from '../../../api/token';
import useAuth from '../../../hooks/useAuth';
import AuthLoader from './AuthLoader';
import {useNavigate} from 'react-router';
import {authLogout} from '../../../store/auth/action';


export const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const auth = useSelector(state => state.auth.data);
  const [auth, loading] = useAuth();
  const [showLogout, setShowLogout] = useState(false);

  const logoutSwitch = () => setShowLogout(current => !current);

  const handleLogout = () => {
    // setAuth({});
    dispatch(delToken());
    setToken('');
    dispatch(authLogout());
    navigate('/');
    // console.log('state после', useSelector(state => state.token));
    // window.location.href = 'http://localhost:3000';
  };

  return (
    <div className={style.container}>
      {loading ? (
          <AuthLoader/>
        ) : auth.name ?
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

