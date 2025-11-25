import axios from 'axios';
import {URL_API} from '../../api/const';

export const POSTS_REQUEST = 'POSTS_REQUEST';

export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';

export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';

export const POSTS_REQUEST_DELETE = 'POSTS_REQUEST_DELETE';

export const postRequest = () => ({
  type: POSTS_REQUEST,
});

export const postsRequestSuccess = posts => ({
  type: POSTS_REQUEST_SUCCESS,
  posts,
});

export const postRequestError = err => ({
  type: POSTS_REQUEST_ERROR,
  err,
});

export const postsClear = () => ({
  type: POSTS_REQUEST_DELETE,
});

export const postRequestAsync = () => (dispatch, getStore) => {
  const {token} = getStore().token;
  dispatch(postRequest());
  if (!token) return;
  axios(`${URL_API}/best?limit=10`, {
    headers: {
      Authorization: `bearer ${token}`
    },
  }).then(rsp => {
    dispatch(postsRequestSuccess(rsp.data.data.children));
    return rsp;
  }).catch(err => {
    dispatch(postRequestError(err));
    console.error(err);
  });
};
