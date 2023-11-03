import { isEqual } from 'lodash-es';
import { makeAutoObservable, runInAction } from 'mobx';
import { AutoLoadingState } from 'store/store.decorators';
import { ActionKey } from 'store/store.types';
import { omitUndefined } from 'utils';
import { addTodo, deleteTodo, getAllTodos, updateTodo } from './todos.api';
import type { Todo } from './todos.types';

class TodosStore {
  todos: Todo[] = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  @AutoLoadingState(ActionKey.GetAllTodos)
  async getAllTodos() {
    const todos = await getAllTodos();
    runInAction(() => {
      this.todos = todos;
    });
  }

  @AutoLoadingState(ActionKey.AddTodo)
  async addTodo(todo: Todo) {
    const newTodo = await addTodo(todo);
    runInAction(() => {
      this.todos.push(newTodo);
    });
  }

  @AutoLoadingState((todo: Todo) => `${ActionKey.UpdateTodo}-${todo.id}`)
  async updateTodo(todo: Todo) {
    const existingTodo = this.todos.find(({ id }) => id === todo.id);
    if (isEqual(omitUndefined(existingTodo), omitUndefined(todo))) {
      return;
    }
    const updatedTodo = await updateTodo(todo);
    runInAction(() => {
      const idx = this.todos.findIndex(({ id }) => id === todo.id);
      this.todos[idx] = updatedTodo;
    });
  }

  @AutoLoadingState((todoId: string) => `${ActionKey.DeleteTodo}-${todoId}`)
  async deleteTodo(todoId: Todo['id']) {
    await deleteTodo(todoId);
    runInAction(() => {
      const idx = this.todos.findIndex(({ id }) => id === todoId);
      this.todos.splice(idx, 1);
    });
  }
}

export default new TodosStore();
