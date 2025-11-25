import {applyMiddleware, combineReducers, createStore} from 'redux';
import {thunk} from 'redux-thunk';
import {commentReducer} from './comment/commentReducer';
import {tokenMiddleware} from './token/action';
import {composeWithDevTools} from '@redux-devtools/extension';
import {authReducer} from './auth/authReducer';
import {tokenReducer} from './token/tokenReducer';
import {postsReducer} from './posts/postReducer';
import {selectedPostReducer} from './selectedPost/selectedPostReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  comment: commentReducer,
  auth: authReducer,
  posts: postsReducer,
  selectedPost: selectedPostReducer,
});


export const store = createStore(rootReducer,
  composeWithDevTools(
    applyMiddleware(tokenMiddleware, thunk)
  ));
