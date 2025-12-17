import App from '../App';
import List from '../components/Main/List';
import NotFound from '../components/NotFound';

const routes = [
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <List/>,
      },
      {
        path: 'auth',
        element: <List/>,
      },
      {
        path: '*',
        element: <NotFound/>,
      },
    ]
  }
];

export default routes;
