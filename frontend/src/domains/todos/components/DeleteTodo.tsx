import { Button } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { useIsLoading, useStore } from 'store/store.hooks';
import { ActionKey } from 'store/store.types';
import { Todo } from '../todos.types';

interface DeleteTodoProps {
  todoId: Todo['id'];
}

const DeleteTodo: FC<DeleteTodoProps> = observer(({ todoId }) => {
  const {
    todos: { deleteTodo },
  } = useStore();
  const isLoading = useIsLoading(`${ActionKey.DeleteTodo}-${todoId}`);

  return (
    <Button
      variant="solid"
      colorScheme="red"
      onClick={() => deleteTodo(todoId)}
      isLoading={isLoading}
    >
      Delete Todo
    </Button>
  );
});

export default DeleteTodo;
