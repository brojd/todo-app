import client from 'services/http.service';
import {
  AddTodoRequest,
  AddTodoResponse,
  DeleteTodoResponse,
  GetAllTodosResponse,
  Todo,
  UpdateTodoRequest,
  UpdateTodoResponse,
} from './todos.types';

export const getAllTodos = async () =>
  (await client.get<undefined, GetAllTodosResponse>('/todos')).data;

export const addTodo = async (todo: Todo) =>
  (await client.post<AddTodoRequest, AddTodoResponse>('/todos', todo)).data;

export const deleteTodo = async (todoId: Todo['id']) =>
  (await client.delete<undefined, DeleteTodoResponse>(`/todos/${todoId}`)).data;

export const updateTodo = async (todo: Todo) =>
  (
    await client.put<UpdateTodoRequest, UpdateTodoResponse>(
      `/todos/${todo.id}`,
      todo
    )
  ).data;
