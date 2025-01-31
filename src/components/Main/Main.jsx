import style from './Main.module.css';
import {Layout} from '../Layout/Layout';

export const Main = () => (
  <>
    <main className={style.main}>
      <Layout>
        <p>Я содержимое контейнера для тега main</p>

      </Layout>
    </main>
  </>
);

