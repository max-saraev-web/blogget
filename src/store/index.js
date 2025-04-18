import {createStore} from 'redux';
import {getToken} from '../api/token';

const initialState = {
  token: getToken(),
  comment: 'Введите ваш комментарий',
};

const UPDATE_COMMENT = 'UPDATE_COMMENT';

const DEL_TOKEN = 'DEL_TOKEN';

const UPDATE_TOKEN = 'UPDATE_TOKEN';

export const updateComment = comment => ({
  type: UPDATE_COMMENT,
  comment,
});

export const delToken = () => ({type: DEL_TOKEN});

export const updateToken = token => ({
  type: UPDATE_TOKEN,
  token,
});


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        comment: action.comment,
      };
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


export const store = createStore(reducer);
