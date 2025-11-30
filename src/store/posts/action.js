import axios from 'axios';
import {URL_API} from '../../api/const';

export const POSTS_REQUEST = 'POSTS_REQUEST';

export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';

export const POSTS_REQUEST_SUCCESS_AFTER = 'POSTS_REQUEST_SUCCESS_AFTER';

export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';

export const POSTS_REQUEST_DELETE = 'POSTS_REQUEST_DELETE';

export const postRequest = () => ({
  type: POSTS_REQUEST,
});

export const postsRequestSuccess = ({children, after}) => ({
  type: POSTS_REQUEST_SUCCESS,
  children,
  after,
});
export const postsRequestSuccessAfter = ({children, after}) => ({
  type: POSTS_REQUEST_SUCCESS_AFTER,
  children,
  after,
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
  const after = getStore().posts.after;
  const loading = getStore().posts.loadingPosts;
  const isLast = getStore().posts.isLast;

  console.log('after: ', after);
  if (!after) dispatch(postRequest());

  if (!token || loading || isLast) return;
  axios(`${URL_API}/best?limit=10
    ${after ? `&after=${after}` : ''}`, {
    headers: {
      Authorization: `bearer ${token}`
    },
  }).then(rsp => {
    if (!after) {
      dispatch(postsRequestSuccess(rsp.data.data));
    } else {
      dispatch(postsRequestSuccessAfter(rsp.data.data));
    }
    return rsp;
  }).catch(err => {
    dispatch(postRequestError(err));
    console.error(err);
  });
};
