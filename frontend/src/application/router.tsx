import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import NotFound from './pages/NotFound';
import Todos from './pages/Todos';
import Users from './pages/Users';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        element: <Todos />,
        index: true,
      },
      {
        path: '/users',
        element: <Users />,
      },
    ],
  },
]);

export default router;
