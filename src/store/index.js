// import {applyMiddleware, combineReducers, createStore} from 'redux';
// import {thunk} from 'redux-thunk';
// import {postsReducer} from './posts/postReducer';
// import {composeWithDevTools} from '@redux-devtools/extension';
import {commentReducer} from './comment/commentReducer';
import {tokenMiddleware} from './token/action';
import {authReducer} from './auth/authReducer';
import {tokenReducer} from './token/tokenReducer';
import {selectedPostReducer} from './selectedPost/selectedPostReducer';
import {configureStore} from '@reduxjs/toolkit';
import postSlice from './posts/postsSlice';

// const rootReducer = combineReducers({
//   token: tokenReducer,
//   comment: commentReducer,
//   auth: authReducer,
//   posts: postsReducer,
//   selectedPost: selectedPostReducer,
// });

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    comment: commentReducer,
    auth: authReducer,
    posts: postSlice,
    selectedPost: selectedPostReducer,
  },
  middleware: defaultMiddleware => defaultMiddleware().concat(tokenMiddleware)
});

// export const storeOld = createStore(rootReducer,
//   composeWithDevTools(
//     applyMiddleware(tokenMiddleware, thunk)
//   ));
