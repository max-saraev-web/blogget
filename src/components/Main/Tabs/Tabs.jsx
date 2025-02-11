import PropTypes from 'prop-types';
import style from './Tabs.module.css';
import {useState} from 'react';
import {assignId} from '../../../utility/generateId';
import SVG from '../../Mixins/SVG/index';
import arrowPic from './img/arrow.svg';

const LIST = [
  {value: 'Главная'},
  {value: 'Просмотренные'},
  {value: 'Сохранённые'},
  {value: 'Мои посты'},
].map(assignId);

export const Tabs = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  return (
    <div className={style.container}>
      <div className={style.wrapperBtn}>
        <button className={style.btn} onClick={() =>
          setIsDropDownOpen(trigger => !trigger)}>Открыть меню
          <SVG
            // width={20}
            // height={20}
            path={arrowPic}/>
        </button>
      </div>

      {isDropDownOpen && (
        <ul
          onClick={() => setIsDropDownOpen(false)}
          className={style.list}>
          {LIST.map(tabElem => (
            <li
              className={style.item}
              key={tabElem.id}>
              <button
                className={style.btn}
                onClick={() => {
                  console.log(tabElem.value);
                }}>
                {tabElem.value}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  addItem: PropTypes.func,
};
