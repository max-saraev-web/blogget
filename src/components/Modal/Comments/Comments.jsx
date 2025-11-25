import PropTypes from 'prop-types';
import style from './Comments.module.css';
import formatDate from '../../../utility/formatDate';

export const Comments = ({comments}) => (
  <div className={style.container}>
    <ul className={style.list}>
      {comments.filter(item => item.created !== undefined)
        .map(post =>
          <li className={style.item} key={post.id}>
            <h3 className={style.author}>{post.author}</h3>
            <p className={style.comment}>{post.body}</p>
            <span>{formatDate(post.created)}</span>
          </li>
        )}
    </ul>
  </div>
);

Comments.propTypes = {
  comments: PropTypes.array,
};
