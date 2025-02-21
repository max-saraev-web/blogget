import Header from './components/Header';
import Main from './components/Main/index';
import useToken from './hooks/useToken';

const App = () => {
  const [token] = useToken('');

  return (
    <>
      <Header token={token}/>
      <Main/>
    </>
)
};

export default App;
