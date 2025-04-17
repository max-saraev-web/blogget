import {Provider} from 'react-redux';
import Header from './components/Header';
import Main from './components/Main/index';
import {AuthContextProvider} from './context/authContext';
import {PostsContextProvider} from './context/postsContext';
import {TokenContextProvider} from './context/tokenContext';
import {store} from './store';


const App = () => (
  <>
    <Provider store={store}>
      <TokenContextProvider>
        <AuthContextProvider>
          <PostsContextProvider>
            <Header/>
            <Main/>
          </PostsContextProvider>
        </AuthContextProvider>
      </TokenContextProvider>
    </Provider>
  </>
);

export default App;
