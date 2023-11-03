// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ActionKeyConfig = string | ((args: any) => string);

export type LoadingState = 'loading' | 'success' | 'error';

export const ActionKey = {
  GetAllTodos: 'getAllTodos',
  AddTodo: 'addTodo',
  UpdateTodo: 'updateTodo',
  DeleteTodo: 'deleteTodo',
  GetAllUsers: 'getAllUsers',
  AddUser: 'addUser',
  UpdateUser: 'updateUser',
  DeleteUser: 'deleteUser',
} as const;
export type ActionKey = (typeof ActionKey)[keyof typeof ActionKey];
