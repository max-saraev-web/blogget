import style from './PostImage.module.css';
import nophoto from '../img/notphoto.jpg';

export const PostImage = ({src, alt}) => {
  console.log(style);
  return (
    <img className={style.img} src={src ? src : nophoto} alt={alt} />
  );
};
