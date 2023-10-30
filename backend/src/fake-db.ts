import { Injectable } from '@nestjs/common';
import { Todo } from './todos/todos.types';
import { User } from './users/users.types';

const INITIAL_USERS: User[] = [{ id: '1', name: 'John', surname: 'Doe' }];
const INITIAL_TODOS: Todo[] = [
  { id: '1', name: 'Buy milk', description: 'Milk is good', isDone: false },
  {
    id: '2',
    name: 'Buy bread',
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
