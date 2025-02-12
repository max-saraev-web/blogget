import SVG from '../../../../Mixins/SVG/index';
import style from './DeleteBtn.module.css';

import delIcon from './img/delete.svg';

export const DeleteBtn = () => (
  <button className={style.delete}>
    <SVG path={delIcon}/>
  </button>
);
