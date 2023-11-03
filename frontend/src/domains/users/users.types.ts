import { AxiosResponse } from 'axios';
import { GeneralSuccessfulResponse } from 'types';

export type User = {
  id: string;
  name: string;
  surname: string;
};

export type GetAllUsersResponse = AxiosResponse<User[]>;

export type DeleteUserResponse = AxiosResponse<GeneralSuccessfulResponse>;

export type AddUserRequest = User;
export type AddUserResponse = AxiosResponse<User>;

export type UpdateUserRequest = User;
export type UpdateUserResponse = AxiosResponse<User>;
