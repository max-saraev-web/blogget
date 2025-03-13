import style from './PostContent.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';

export const PostContent = ({title, author, url}) => (
  <div className={style.content}>
    <Text As='h2'>
      <Text
        As='a'
        size='18'
        tsize='24'
        className={style.linkPost} href={url}
        rel='noopener noreferrer'
        target='_blank'
      >
        {title}
      </Text>
    </Text>
    <Text
      size='12'
      tsize='14'
      dsize='26'
      as='a'
      color='orange'
      className={style.linkAuthor} href="#author">{author}</Text>
  </div>
);

PostContent.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  url: PropTypes.string,
};
