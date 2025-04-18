import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {useSelector} from 'react-redux';

const useCommentsData = (id) => {
  // const [comments, setComments] = useState({});
  const token = useSelector(state => state.token);
  const [post, setPosts] = useState([]);

  // useEffect(() => {
  //   if (!token) return;
  //   fetch(`${URL_API}/r/${id}/comments/${subreddit}`, {
  //     headers: {
  //       Authorization: `bearer ${token}`
  //     },
  //   }).then(rsp => {
  //     if (rsp.status === 401) return;
  //     return rsp.json();
  //   }).then(rsp => {
  //     setComments(rsp);
  //   })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // }, [token]
  // );
  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(
        ([
          {
            data: {
              children: [{data: post}],
            },
          },
          {
            data: {
              children,
            },
          },
        ]) => {
          const comments = children.map(item => item.data);

          setPosts([post, comments]);
        },
      )
      .catch((err) => {
        console.error(err);
      });
  }, []
  );
  return post;
};

export default useCommentsData;

