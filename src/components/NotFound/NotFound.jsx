import {Link} from 'react-router';
import Button from '../Button/index';
import style from './NotFound.module.css';

export const NotFound = () => {
  console.log(style);
  return (
    <div className={style.container}>
      <div className={style.block}>
        <h2 className={style.title}>404</h2>
        <p className={style.text}>Страница не найдена.</p>
        <Link to="/">
          <Button text={'На главную!'}/>
        </Link>
      </div>
    </div>
  );
};
