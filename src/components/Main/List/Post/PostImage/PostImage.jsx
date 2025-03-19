import style from './PostImage.module.css';
import nophoto from '../img/notphoto.jpg';
import PropTypes from 'prop-types';

export const PostImage = ({src, alt}) => {
  const regex = /.*\.png/;

  return (
    <img className={style.img} src={
    regex.test(src) ||
    src === 'spoiler' ||
    src === 'default' ||
    src === 'self' ?
  nophoto : src} alt={alt} />
  );
};

PostImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
