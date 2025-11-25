import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postRequestAsync, postsClear} from '../store/posts/action';


const usePosts = () => {
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.token);
  const {posts} = useSelector(state => state.posts);
  const {loadingPosts} = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(postRequestAsync());
  }, [token]
  );

  const setPosts = () => dispatch(postsClear());
  return [posts, loadingPosts, setPosts];
};

export default usePosts;
