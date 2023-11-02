import todosStore from 'domains/todos/todos.store';
import usersStore from 'domains/users/users.store';
import commonStore from './common.store';

export default class RootStore {
  common = commonStore;
  todos = todosStore;
  users = usersStore;
}
