import {useContext, useState} from 'react';
import {tokenContext} from '../context/tokenContext';

const useUserName = () => {
  const {token, delToken} = useContext(tokenContext);
  const [userData, setUserData] = useState({});
};

export default useUserName;
