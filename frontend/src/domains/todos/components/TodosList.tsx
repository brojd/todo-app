import { EmptyState, StructuredList, StructuredListItem } from '@saas-ui/react';
import { observer } from 'mobx-react-lite';
import { RiCheckboxMultipleLine } from 'react-icons/ri';
import { useStore } from 'store/store.hooks';

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
        <StructuredListItem key={todo.id}>{todo.name}</StructuredListItem>
      ))}
    </StructuredList>
  );
});

export default TodosList;
