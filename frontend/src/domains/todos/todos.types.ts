import { AxiosResponse } from 'axios';

export type Todo = {
  id: string;
  name: string;
  description?: string;
  isDone?: boolean;
  assigneeId?: string;
};

export type GetAllTodosResponse = AxiosResponse<Todo[]>;
