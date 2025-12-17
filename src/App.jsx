import {useDispatch} from 'react-redux';
import Header from './components/Header';
import {updateToken} from './store/token/action';
import {getToken} from './api/token';
import {Layout} from './components/Layout/Layout';
import styleMain from './components/Main/Main.module.css';
import {Outlet} from 'react-router';
import Tabs from './components/Main/Tabs/index';

const App = () => {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));

  return (
    <>
      <Header/>
      <main className={styleMain.main}>
        <Layout>
          <Tabs/>
          <Outlet/>
        </Layout>
      </main>
    </>
  );
};

export default App;
