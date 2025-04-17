import style from './Modal.module.css';
import PropTypes from 'prop-types';
import {createPortal} from 'react-dom';
import {useEffect, useRef, useState} from 'react';
import {ReactComponent as CloseIcon} from './img/close.svg';
import useCommentsData from '../../hooks/useCommentsData';
import Comments from './Comments';
import FormComment from './FormComment/index';

export const Modal = ({id, close}) => {
  const overlayRef = useRef(null);
  const btnRef = useRef(null);
  const comments = useCommentsData(id);
  const [post, commentaries] = comments;
  const [isComment, setIsComment] = useState(false);

  const handleClick = ev => {
    const target = ev.target;
    if (target === overlayRef.current || target === btnRef.current) {
      close();
    }
  };

  const handleEsc = ev => {
    if (ev.keyCode === 27) close();
  };

  const handleComment = () => setIsComment(true);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('click', handleClick);
    };
  }, []
  );

  return createPortal((
    <div ref={overlayRef} className={style.overlay}>
      <div className={style.modal}>
        {post ?
          <>
            {post?.title ? <h2 className={style.title}>{post.title}</h2> :
            <h2 className={style.title}>Заголовок отсутствует</h2>}

            {post?.author ? <p className={style.author}>{post.author}</p> :
              <p className={style.author}>Автор отсутствует</p>}

            {isComment ? <FormComment/> :
              <button onClick={handleComment}
                className={style.btn}>Написать комментарий</button>}

            <Comments comments={comments}/>

            {post?.selftext ? <p className={style.content}>{post.selftext}</p> :
              <div className={style.content}>Текст отсутствует</div>}

            <button ref={btnRef} className={style.close}>
              <CloseIcon/>
            </button>
          </> :
          <p className={style.preload}>Загрузка...</p>
        }
      </div>
    </div>
  ), document.querySelector('#modal-root')
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
};
