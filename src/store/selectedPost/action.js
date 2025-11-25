import axios from 'axios';
import {URL_API} from '../../api/const';

export const SELECTED_POST_REQUEST = 'SELECTED_POST_REQUEST';

export const SELECTED_POST_REQUEST_SUCCESS = 'SELECTED_POST_REQUEST_SUCCESS';

export const SELECTED_POST_REQUEST_ERROR = 'SELECTED_POST_REQUEST_ERROR';

export const SELECTED_POST_REQUEST_DELETE = 'SELECTED_POST_REQUEST_DELETE';

export const commentsRequest = () => ({
  type: SELECTED_POST_REQUEST,
});

// export const updateComments = obj => ({
//   type: UPDATE_COMMENTS,
//   obj,
// });

export const commentsRequestAsync = id => (dispatch, getState) => {
  const {token} = getState().token;
  // ! - доделать так что бы запрос на сервер не проходил в случае если id в state равен запросу
  if (!token) return;
  dispatch(commentsRequest);
  axios(`${URL_API}/comments/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  }).then(
    ([
      {
        data: {
          children: [{data: post}],
        },
      },
      {
        data: {
          children,
        },
      },
    ]) => {
      const comments = children.map(item => item.data);
      console.log('comments: ', comments);
      dispatch(updateComments({post, comments}));
      console.log('наш пост с коментами', {post, comments});
    },
  )
    .catch((err) => {
      console.error(err);
    });
};
