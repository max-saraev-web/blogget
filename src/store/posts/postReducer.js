import {
  POSTS_CATEGORY_ACTIVE,
  POSTS_INCREASE_COUNTER,
  POSTS_REQUEST,
  POSTS_REQUEST_DELETE,
  POSTS_REQUEST_ERROR,
  POSTS_REQUEST_SUCCESS,
  POSTS_REQUEST_SUCCESS_AFTER} from './action';

const initialState = {
  loadingPosts: false,
  posts: [],
  err: '',
  after: '',
  isLast: false,
  category: '',
  pageCount: 0,
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
        posts: action.children,
        err: '',
        after: action.after,
        isLast: !action.after,
      };
    case POSTS_REQUEST_SUCCESS_AFTER:
      return {
        ...state,
        loadingPosts: false,
        posts: [...state.posts, ...action.children],
        err: '',
        after: action.after,
        isLast: !action.after,
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
    case POSTS_CATEGORY_ACTIVE:
      return {
        ...state,
        category: action.category,
        isLast: '',
        after: '',
        pageCount: 0,
      };
    case POSTS_INCREASE_COUNTER:
      return {
        ...state,
        pageCount: state.pageCount + 1,
      };
    default:
      return state;
  }
};
