import {useDispatch} from 'react-redux';
import Header from './components/Header';
import Main from './components/Main/index';
import {updateToken} from './store/token/action';
import {getToken} from './api/token';

const App = () => {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));

  return (
    <>
      <Header/>
      <Main/>
    </>
  );
};

export default App;
