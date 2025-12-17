import ReactDOM from 'react-dom/client';
import './index.css';
import {store} from './store';
import {Provider} from 'react-redux';
import {createBrowserRouter, RouterProvider} from 'react-router';
import routes from './routes/routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(routes);

root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);
