import {useState, useEffect} from 'react';

const useToken = (state) => {
  const [token, setToken] = useState(state);

  useEffect(() => {
    if (window.location.pathname.includes('/auth')) {
      const token = new URLSearchParams(window.location.hash.substring(1))
        .get('access_token');
      console.log('токен пришёл', token);
      setToken(token);
    }
    if (localStorage.getItem('bearer')) {
      setToken(localStorage.getItem('bearer'));
    };
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem('bearer', token);
    } else {
      localStorage.removeItem('bearer');
    }
  }, [token]
  );

  const delToken = () => setToken(prev => (prev ? '' : null));

  return [token, delToken];
};

export default useToken;
