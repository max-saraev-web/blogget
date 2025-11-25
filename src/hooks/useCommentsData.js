import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {URL_API} from '../api/const';


const useCommentsData = id => {
  const selectedPost = useSelector(state => state.selectedPost);
  const token = useSelector(state => state.token);
  // const [comments, setComments] = useState({});

  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/r/${id}/comments/${subreddit}`, {
      headers: {
        Authorization: `bearer ${token}`
      },
    }).then(rsp => {
      if (rsp.status === 401) return;
      return rsp.json();
    }).then(rsp => {
      // setComments(rsp);
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

