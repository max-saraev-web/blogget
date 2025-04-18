import {Provider} from 'react-redux';
import Header from './components/Header';
import Main from './components/Main/index';
import {AuthContextProvider} from './context/authContext';
import {PostsContextProvider} from './context/postsContext';
import {store} from './store';


const App = () => (
  <>
    <Provider store={store}>
      <AuthContextProvider>
        <PostsContextProvider>
          <Header/>
          <Main/>
        </PostsContextProvider>
      </AuthContextProvider>
    </Provider>
  </>
);

export default App;
