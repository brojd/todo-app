import { Injectable } from '@nestjs/common';
import { Todo } from './todos/todos.types';
import { User } from './users/users.types';

const INITIAL_USERS: User[] = [
  { id: '1', name: 'John', surname: 'Doe' },
  { id: '2', name: 'Jane', surname: 'Carlson' },
];
const INITIAL_TODOS: Todo[] = [
  { id: 'TD-1', title: 'Buy milk', description: 'Milk is good', isDone: false },
  {
    id: 'TD-2',
    title: 'Buy bread',
    description: 'Bread is good',
    isDone: false,
    assigneeId: '1',
  },
];

@Injectable()
class FakeDb {
  users = INITIAL_USERS;
  todos = INITIAL_TODOS;
}

export default FakeDb;
