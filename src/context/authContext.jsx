import {createContext} from 'react';
import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';

export const authContext = createContext({});

export const AuthContextProvider = ({children}) => {
  const [auth, setAuth] = useAuth();

  return (
    <authContext.Provider value={{auth, setAuth}}>
      {children}
    </authContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};
