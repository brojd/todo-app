import { Flex } from '@chakra-ui/react';
import Loading from 'components/Loading';
import AddTodo from 'domains/todos/components/AddTodo';
import TodosList from 'domains/todos/components/TodosList';
import { ActionKey } from 'store/store.types';

const Todos = () => (
  <Loading actionKey={ActionKey.GetAllTodos}>
    <TodosList />
    <Flex justifyContent="center">
      <AddTodo />
    </Flex>
  </Loading>
);

export default Todos;
