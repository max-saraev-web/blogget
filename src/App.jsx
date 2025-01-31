import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';

function App({techName}) {
  console.log('Пропсы в APP', techName);
  return (
    <>
      <Header/>
      <Main/>
    </>
  );
}

export default App;
