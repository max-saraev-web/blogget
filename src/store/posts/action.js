import axios from 'axios';
import {URL_API} from '../../api/const';

export const POSTS_REQUEST = 'POSTS_REQUEST';

export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';

export const POSTS_REQUEST_SUCCESS_AFTER = 'POSTS_REQUEST_SUCCESS_AFTER';

export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';

export const POSTS_REQUEST_DELETE = 'POSTS_REQUEST_DELETE';

export const POSTS_CATEGORY_ACTIVE = 'POSTS_CATEGORY_ACTIVE';

export const POSTS_INCREASE_COUNTER = 'POSTS_INCREASE_COUNTER';

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

export const postsActiveCategory = category => ({
  type: POSTS_CATEGORY_ACTIVE,
  category,
});

export const postsIncreaseCount = () => ({
  type: POSTS_INCREASE_COUNTER,
});


// export const postRequestAsync = newCategory => (dispatch, getStore) => {
//   let category = getStore().posts.category;
//   if (newCategory) {
//     category = newCategory;
//     dispatch(postsActiveCategory(category));
//   }
//   const {token} = getStore().token;
//   const after = getStore().posts.after;
//   const loading = getStore().posts.loadingPosts;
//   const isLast = getStore().posts.isLast;

//   if (!after) dispatch(postRequest());

//   if (!token || loading || isLast) return;
//   axios(`${URL_API}/${category}?limit=10
//     ${after ? `&after=${after}` : ''}`, {
//     headers: {
//       Authorization: `bearer ${token}`
//     },
//   }).then(rsp => {
//     dispatch(postsIncreaseCount());
//     if (!after) {
//       dispatch(postsRequestSuccess(rsp.data.data));
//       console.log(rsp.data.data);
//     } else {
//       dispatch(postsRequestSuccessAfter(rsp.data.data));
//     }
//     return rsp;
//   }).catch(err => {
//     dispatch(postRequestError(err));
//     console.error(err);
//   });
// };
