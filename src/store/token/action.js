import {setToken} from '../../api/token';

export const DEL_TOKEN = 'DEL_TOKEN';

export const UPDATE_TOKEN = 'UPDATE_TOKEN';

export const delToken = () => ({type: DEL_TOKEN});

export const updateToken = token => ({
  type: UPDATE_TOKEN,
  token,
});

export const tokenMiddleware = store => next => action => {
  if (action.type === UPDATE_TOKEN) {
    setToken(action.token);
  }

  if (action.type === DEL_TOKEN) {
    setToken('');
  }

  next(action);
};
