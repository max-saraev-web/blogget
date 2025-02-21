import style from './PostRating.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text/index';

export const PostRating = ({ups}) => (
  <div className={style.rating}>
    <button className={style.up} aria-label='Повысить рейтинг'/>
    <Text
      As='p'
      fweight='bold'
      color='grey99'
    >{ups}
    </Text>
    <button className={style.down} aria-label='Понизить рейтинг'/>
  </div>
);

PostRating.propTypes = {
  ups: PropTypes.string,
};
