import {useEffect, useRef} from 'react';
import style from './List.module.css';
import ListLoader from './ListLoader';
import Post from './Post';
import {postRequestAsync} from '../../../store/posts/action';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../Button/index';

export const List = () => {
  const loadingAuth = useSelector(state => state.auth.data);
  const endList = useRef(null);
  const dispatch = useDispatch();

  const posts = useSelector(state => state.posts.posts);
  const loading = useSelector(state => state.posts.loadingPosts);
  const pageCounter = useSelector(state => state.posts.pageCount);

  useEffect(() => {
    const lastObserver = new IntersectionObserver((watched) => {
      if (watched[0].isIntersecting) {
        dispatch(postRequestAsync());
      }
      if (pageCounter > 2) {
        lastObserver.disconnect();
        console.log('два раза');
      };
    }, {
      rootMargin: '100px',
    });

    lastObserver.observe(endList.current);

    return () => {
      lastObserver.disconnect();
    };
  });


  return (
    <>
      <ul className={style.list}>
        {loading || Object.keys(loadingAuth).length === 0 ? <ListLoader/> :
        posts.map(({data}) => <Post key={data.id} postData={data}/>)}
        <li ref={endList} className={style.last}/>
      </ul>
      {pageCounter > 2 ?
        <Button
          text="Загрузить ещё"
          onClick={() => dispatch(postRequestAsync())}
        /> : ''
      }
    </>
  );
};
