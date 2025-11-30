import {useEffect, useRef} from 'react';
import style from './List.module.css';
import ListLoader from './ListLoader';
import Post from './Post';
import {postRequestAsync} from '../../../store/posts/action';
import {useDispatch, useSelector} from 'react-redux';

export const List = () => {
  const endList = useRef(null);
  const dispatch = useDispatch();

  const posts = useSelector(state => state.posts.posts);
  const loading = useSelector(state => state.posts.loadingPosts);

  useEffect(() => {
    const lastObserver = new IntersectionObserver((watched) => {
      if (watched[0].isIntersecting) dispatch(postRequestAsync());
    }, {
      rootMargin: '100px',
    });

    lastObserver.observe(endList.current);

    return () => {
      lastObserver.disconnect();
    };
  }
  );


  return (
    <ul className={style.list}>
      {loading ? <ListLoader/> :
        posts.map(({data}) => <Post key={data.id} postData={data}/>)}
      <li ref={endList} className={style.last}/>
    </ul>
  );
};
