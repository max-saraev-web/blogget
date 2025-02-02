import style from './Post.module.css';
import DeleteBtn from './DeleteBtn/index';
import PostImage from './PostImage';
import PostContent from './PostContent/index';
import PostRating from './PostRating/index';
import PostTime from './PostTime/index';

export const Post = ({postData}) => {
  const {title, author, ups, date, img} = postData;

  return (
    <li className={style.post}>
      <PostImage src={img} alt={title}/>
      <PostContent title={title} author={author}/>
      <PostRating ups={ups}/>
      <PostTime date={date}/>
      <DeleteBtn/>
    </li>
  );
};
