import { Flex, Tooltip } from '@chakra-ui/react';
import { EmptyState, StructuredList, StructuredListItem } from '@saas-ui/react';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { RiCheckboxMultipleLine, RiInformationLine } from 'react-icons/ri';
import { useStore } from 'store/store.hooks';
import { Todo } from '../todos.types';
import DeleteTodo from './DeleteTodo';
import ReassignTodoToAnotherUser from './ReassignTodoToAnotherUser';
import TodoTag from './TodoTag';

const TodosList = observer(() => {
  const {
    todos: { todos },
  } = useStore();

  if (!todos.length) {
    return (
      <EmptyState
        textAlign="center"
        colorScheme="primary"
        icon={RiCheckboxMultipleLine}
        title="No todos"
        mt={4}
      />
    );
  }

  return (
    <StructuredList>
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </StructuredList>
  );
});

interface TodoListItemProps {
  todo: Todo;
}
const TodoListItem: FC<TodoListItemProps> = ({ todo }) => (
  <StructuredListItem>
    <Flex alignItems="center" columnGap={2}>
      <TodoTag id={todo.id} />
      <div>{todo.title}</div>
      <Tooltip label={todo.description}>
        <span>
          <RiInformationLine />
        </span>
      </Tooltip>
    </Flex>
    <Flex alignItems="center" columnGap={2}>
      <ReassignTodoToAnotherUser todo={todo} />
      <DeleteTodo todoId={todo.id} />
    </Flex>
  </StructuredListItem>
);

export default TodosList;
