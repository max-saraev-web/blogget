import Header from './components/Header';
import Main from './components/Main/index';
import useToken from './hooks/useToken';

const App = () => {
  const [token, delToken] = useToken('');
  return (
    <>
      <Header token={token} delToken={delToken}/>
      <Main/>
    </>
  );
};

export default App;
