import {useContext, useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';


const usePosts = () => {
  const {token} = useContext(tokenContext);
  const [posts, setPosts] = useState({});

  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/best`, {
      headers: {
        Authorization: `bearer ${token}`
      },
    }).then(rsp => {
      if (rsp.status === 401) return;
      return rsp.json();
    }).then(rsp => {
      setPosts(rsp.data.children);
    })
      .catch(err => {
        console.error(err);
      });
  }, [token]
  );
  return [posts, setPosts];
};

export default usePosts;
