import Loading from 'components/Loading';
import TodosList from 'domains/todos/components/TodosList';

const Todos = () => (
  <Loading actionKey="getAllTodos">
    <TodosList />
  </Loading>
);

export default Todos;
