import PropTypes from 'prop-types';
import style from './Tabs.module.css';
import {useEffect, useState} from 'react';
import {assignId} from '../../../utility/generateId';
import SVG from '../../Mixins/SVG/index';
import {Text} from '../../../UI/Text/index';

import arrowPic from './img/arrow.svg';
import topPic from './img/top.svg';
import homePic from './img/home.svg';
import hotPic from './img/hot.svg';
import bestPic from './img/best.svg';
import debounceRaf from '../../../utility/debounceRaf';


const LIST = [
  {value: 'Главная', icon: homePic},
  {value: 'Топ', icon: topPic},
  {value: 'Лучшие', icon: bestPic},
  {value: 'Горячие', icon: hotPic},
].map(assignId);

export const Tabs = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);
  const [selectedTab, setSelectedTab] = useState('Открыть меню');

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropDown(true);
    } else {
      setIsDropDown(false);
    }
  };


  useEffect(() => {
    const resizeRaf = debounceRaf(handleResize);
    handleResize();
    window.addEventListener('resize', resizeRaf);
    return () => {
      window.removeEventListener('resize', resizeRaf);
    };
  }, []);

  return (
    <div className={style.container}>
      {isDropDown && (<div className={style.wrapperBtn}>
        <button className={style.btn} onClick={() =>
          setIsDropDownOpen(trigger => !trigger)}>
          {selectedTab}
          <SVG
            width={15}
            height={15}
            path={arrowPic}/>
        </button>
      </div>)}

      {(isDropDownOpen || !isDropDown) && (
        <ul
          onClick={() => setIsDropDownOpen(false)}
          className={style.list}>
          {LIST.map(tabElem => (
            <li
              className={style.item}
              key={tabElem.id}>
              <Text
                As='button'
                className={style.btn}
                onClick={() => {
                  setSelectedTab(tabElem.value);
                }}>
                {tabElem.value}
                {tabElem.icon && <SVG
                  width={40}
                  height={40}
                  path={tabElem.icon}/>}
              </Text>
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
