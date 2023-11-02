import client from 'services/http.service';
import { GetAllTodosResponse } from './todos.types';

export const getAllTodos = async () =>
  (await client.get<undefined, GetAllTodosResponse>('/todos')).data;
