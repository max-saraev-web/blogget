import {SELECTED_POST_REQUEST} from './action';

const initialState = {
  loading: false,
  comments: [],
  status: '',
};

export const selectedPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  };
};
