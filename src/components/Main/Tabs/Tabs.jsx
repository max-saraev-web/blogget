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
import {useDispatch} from 'react-redux';
import {postRequestAsync} from '../../../store/posts/action';


const LIST = [
  {value: 'Главная', icon: homePic, category: 'new'},
  {value: 'Топ', icon: topPic, category: 'top'},
  {value: 'Лучшие', icon: bestPic, category: 'best'},
  {value: 'Горячие', icon: hotPic, category: 'hot'},
].map(assignId);

export const Tabs = () => {
  const dispatch = useDispatch();

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);
  const [selectedTab, setSelectedTab] = useState('Открыть меню');
  const [category, setCategory] = useState('new');

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropDown(true);
    } else {
      setIsDropDown(false);
    }
  };

  useEffect(() => {
    dispatch(postRequestAsync(category));
  }, [category]
  );

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
                onClick={() => {
                  setSelectedTab(tabElem.value);
                  setCategory(tabElem.category);
                }}
                className={style.btn}>
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
