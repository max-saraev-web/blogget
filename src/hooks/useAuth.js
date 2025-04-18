import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {useDispatch, useSelector} from 'react-redux';
import {delToken} from '../store';

const useAuth = () => {
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();
  const [auth, setAuth] = useState({});

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`
      },
    }).then(rsp => {
      if (rsp.status === 401) {
        dispatch(delToken);
        return;
      };
      return rsp.json();
    })
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch(err => {
        console.error(err);
        setAuth({});
        dispatch(delToken);
      });
  }, [token]
  );
  return [auth, setAuth];
};

export default useAuth;
