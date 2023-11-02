import { makeAutoObservable, runInAction } from 'mobx';
import { AutoLoadingState } from 'store/store.decorators';
import { getAllTodos } from './todos.api';
import { Todo } from './todos.types';

class TodosStore {
  todos: Todo[] = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  @AutoLoadingState()
  async getAllTodos() {
    const todos = await getAllTodos();
    runInAction(() => {
      this.todos = todos;
    });
  }
}

export default new TodosStore();
