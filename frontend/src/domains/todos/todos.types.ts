import { AxiosResponse } from 'axios';
import { GeneralSuccessfulResponse } from 'types';

export type Todo = {
  id: string;
  title: string;
  description?: string;
  isDone?: boolean;
  assigneeId?: string;
};

export type GetAllTodosResponse = AxiosResponse<Todo[]>;

export type DeleteTodoResponse = AxiosResponse<GeneralSuccessfulResponse>;

export type AddTodoRequest = Todo;
export type AddTodoResponse = AxiosResponse<Todo>;

export type UpdateTodoRequest = Todo;
export type UpdateTodoResponse = AxiosResponse<Todo>;
