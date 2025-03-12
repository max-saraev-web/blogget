import style from './PostImage.module.css';
import nophoto from '../img/notphoto.jpg';
import PropTypes from 'prop-types';

export const PostImage = ({src, alt}) =>
  <img className={style.img} src={src === 'default' || src === 'self' ?
  nophoto : src} alt={alt} />;

PostImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
