import {
  POSTS_REQUEST,
  POSTS_REQUEST_DELETE,
  POSTS_REQUEST_ERROR,
  POSTS_REQUEST_SUCCESS} from './action';

const initialState = {
  loadingPosts: false,
  posts: [],
  err: '',
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return {
        ...state,
        loadingPosts: true,
        err: '',
      };
    case POSTS_REQUEST_SUCCESS:
      return {
        ...state,
        loadingPosts: false,
        posts: action.posts,
        err: '',
      };
    case POSTS_REQUEST_ERROR:
      return {
        ...state,
        loadingPosts: false,
        posts: [],
        err: action.err,
      };
    case POSTS_REQUEST_DELETE:
      return {
        ...state,
        loadingPosts: false,
        posts: [],
        err: '',
      };
    default:
      return state;
  }
};
