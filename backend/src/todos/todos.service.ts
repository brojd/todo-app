import { Injectable } from '@nestjs/common';
import { GeneralSuccessfulResponse } from 'src/app.types';
import FakeDb from 'src/fake-db';
import { AddTodoDTO, EditTodoDTO } from './todos.dto';
import { Todo } from './todos.types';

@Injectable()
export class TodosService {
  constructor(private readonly fakeDb: FakeDb) {}

  async getAllTodos(): Promise<Todo[]> {
    return this.fakeDb.todos;
  }

  async getTodoById(id: Todo['id']): Promise<Todo> {
    return this.fakeDb.todos.find(({ id: todoId }) => todoId === id);
  }

  async addTodo(todo: AddTodoDTO): Promise<Todo> {
    const newTodo = {
      ...todo,
      id: `${this.fakeDb.todos.length + 1}`,
    };
    this.fakeDb.todos.push(newTodo);
    return newTodo;
  }

  async updateTodo(todo: EditTodoDTO): Promise<Todo> {
    const todoIndex = this.fakeDb.todos.findIndex(({ id }) => id === todo.id);
    this.fakeDb.todos[todoIndex] = {
      ...this.fakeDb.todos[todoIndex],
      ...todo,
    };
    return this.fakeDb.todos[todoIndex];
  }

  async deleteTodo(id: Todo['id']): Promise<GeneralSuccessfulResponse> {
    const todoIndex = this.fakeDb.todos.findIndex(
      ({ id: todoId }) => todoId === id,
    );
    this.fakeDb.todos.splice(todoIndex, 1);
    return { ok: true };
  }
}
