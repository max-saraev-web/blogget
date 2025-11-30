import style from './PostContent.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';
import {useState} from 'react';
import {Modal} from '../../../../Modal/Modal';

export const PostContent = ({title, author, id, subreddit}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={style.content}>
      <Text As='h2'>
        <Text
          As='a'
          size='18'
          tsize='24'
          className={style.linkPost} href='#post'
          // rel='noopener noreferrer'
          // target='_blank'
          onClick={() => setIsModalOpen(true)}
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
      {isModalOpen &&
        <Modal
          subreddit={subreddit}
          id={id}
          close={() => setIsModalOpen(false)}
        />}
    </div>
  );
};


PostContent.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  id: PropTypes.string,
  subreddit: PropTypes.string,
};
