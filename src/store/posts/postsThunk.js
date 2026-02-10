import {createAsyncThunk} from '@reduxjs/toolkit';
import {postsActiveCategory} from './postsSlice';
import axios from 'axios';
import {URL_API} from '../../api/const';
// import {postsActiveCategory} from './action';
// import {actionsPostSlice} from '../posts/postsSlice';
// console.log('actions111: ', actionsPostSlice);


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

export const postsThunk = createAsyncThunk(
  'posts/fetch',
  async (newCategory, {getState, dispatch}) => {
    let category = getState().posts.category;

    const token = getState().token.token;
    const after = getState().posts.after;

    if (newCategory) {
      category = newCategory;
      dispatch(postsActiveCategory(category));
    };
    // if (!token || loading || isLast) {
    //   console.log('isLast: ', isLast);
    //   console.log('loading: ', loading);
    //   return;
    // } else {

    // }
    const {data} = await axios(`${URL_API}/${category}?limit=10
          ${after ? `&after=${after}` : ''}`, {
      headers: {
        Authorization: `bearer ${token}`
      },
    });
    console.log('привет мир');
    console.log('data: 3333', data);
    return data.data;
    // console.log('category: ', category);
    // console.log('категория', newCategory);
    // console.log(rtk);
  });
