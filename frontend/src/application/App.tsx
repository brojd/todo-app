import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useStore } from 'store/store.hooks';
import router from './router';

const App = () => {
  const {
    todos: { getAllTodos },
    users: { getAllUsers },
  } = useStore();

  useEffect(() => {
    getAllTodos();
    getAllUsers();
  }, [getAllTodos, getAllUsers]);

  return <RouterProvider router={router} />;
};

export default App;
