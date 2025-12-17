import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {URL_API} from '../api/const';


const useCommentsData = (subreddit, id, title) => {
  const selectedPost = useSelector(state => state.selectedPost);
  const token = useSelector(state => state.token);
  // const [comments, setComments] = useState({});

  useEffect(() => {
    if (!token) return;
    // /r/Pikabu/comments/1pnwvvm/чулочки/
    fetch(`${URL_API}/r/${subreddit}/comments/${id}/${title}.json`, {
      headers: {
        Authorization: `bearer ${token}`
      },
    }).then(rsp => {
      if (rsp.status === 401) return;
      return rsp.json();
    }).then(rsp => {
      // setComments(rsp);
      console.log('rsp', rsp);
    })
      .catch(err => {
        console.error(err);
      });
  }, [token]
  );
  useEffect(() => {
    
  }, []
  );
  return selectedPost;
};

export default useCommentsData;

