import style from './PostImage.module.css';
import nophoto from '../img/notphoto.jpg';
import PropTypes from 'prop-types';

export const PostImage = ({src, alt}) => {
  console.log(style);
  return (
    <img className={style.img} src={src ? src : nophoto} alt={alt} />
  );
};

PostImage.PropTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
