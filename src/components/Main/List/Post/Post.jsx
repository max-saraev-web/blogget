import style from './Post.module.css';
import DeleteBtn from './DeleteBtn/index';
import PostImage from './PostImage';
import PostContent from './PostContent/index';
import PostRating from './PostRating/index';
import PostTime from './PostTime/index';
import PropTypes from 'prop-types';

export const Post = ({postData}) => {
  const {title, author, ups, date, thumbnail} = postData;
  return (
    <li className={style.post}>
      <PostImage src={thumbnail} alt={title}/>
      <PostContent title={title} author={author}/>
      <PostRating ups={ups}/>
      <PostTime date={date}/>
      <DeleteBtn/>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
