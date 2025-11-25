import {DEL_TOKEN, UPDATE_TOKEN} from './action';

const initialState = {
  token: '',
};

export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEL_TOKEN:
      return {
        ...state,
        token: '',
      };
    case UPDATE_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};
