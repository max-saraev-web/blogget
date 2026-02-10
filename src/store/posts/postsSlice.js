import {createSlice} from '@reduxjs/toolkit';
// import {postsActiveCategory, postsIncreaseCount} from './action';
import {postsThunk} from './postsThunk';

const initialState = {
  loadingPosts: false,
  posts: [],
  err: '',
  after: '',
  isLast: false,
  category: '',
  pageCount: 0,
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postsRequest: (state) => {
      state.loadingPosts = true;
      state.err = '';
    },
    postsActiveCategory: (state, action) => {
      state.category = action.payload;
      state.pageCount = 0;
      state.isLast = false;
      state.after = '';
      state.posts = [];
    },
    postsIncreaseCount: state => {
      state.pageCount += 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(postsThunk.pending, (state) => {
        state.loadingPosts = true;
        state.err = null;
        console.log('прогрузка из билдера');
      })
      .addCase(postsThunk.fulfilled, (state, payload) => {
        console.log('то что пришло от сервера ', payload.payload);
        const {children, after} = payload.payload;
        // console.log('success', payload.payload);
        state.loadingPosts = false;
        state.pageCount += 1;
        state.after = after;
        if (after) {
          state.posts.push(...children);
        } else {
          state.posts.push(...children);
          state.isLast = true;
        }
      })
      .addCase(postsThunk.rejected, (state, {error: {message}}) => {
        console.log('action: ', message);
        state.loadingPosts = false;
        console.log('наёбка');
      });
  }
});

export const {postsActiveCategory} = postSlice.actions;

export default postSlice.reducer;
