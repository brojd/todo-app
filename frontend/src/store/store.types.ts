export type LoadingStateOptions = {
  customActionKey?: string;
};

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export type ActionKey = 'getAllTodos' | 'getAllUsers';
