import Header from './components/Header';
import Main from './components/Main/index';
import {AuthContextProvider} from './context/authContext';
import {PostsContextProvider} from './context/postsContext';
import {TokenContextProvider} from './context/tokenContext';


const App = () => (
  <>
    <TokenContextProvider>
      <AuthContextProvider>
        <PostsContextProvider>
          <Header/>
          <Main/>
        </PostsContextProvider>
      </AuthContextProvider>
    </TokenContextProvider>
  </>
);

export default App;
