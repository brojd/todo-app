import { sortBy } from 'lodash';
import { Todo } from './todos.types';

export const getNewTodoId = (existingTodos: Todo[]) => {
  const lastNumericId = Number(
    sortBy(
      existingTodos.map((todo) => ({
        ...todo,
        id: todo.id.split('-')[1],
      })),
      'id',
    ).at(-1).id,
  );
  return `TD-${lastNumericId + 1}`;
};
