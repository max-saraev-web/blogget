import style from './AuthLoader.module.css';
import SyncLoader from 'react-spinners/SyncLoader';

export const AuthLoader = () => (
  <div className={style.container}>
    <SyncLoader
      color='#DC143C'
      css={{
        display: 'block'
      }}
      size={8}/>
  </div>
);
