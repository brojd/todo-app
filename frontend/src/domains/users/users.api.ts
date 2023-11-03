import client from 'services/http.service';
import {
  AddUserRequest,
  AddUserResponse,
  DeleteUserResponse,
  GetAllUsersResponse,
  UpdateUserRequest,
  UpdateUserResponse,
  User,
} from './users.types';

export const getAllUsers = async () =>
  (await client.get<undefined, GetAllUsersResponse>('/users')).data;

export const addUser = async (user: User) =>
  (await client.post<AddUserRequest, AddUserResponse>('/users', user)).data;

export const deleteUser = async (userId: User['id']) =>
  (await client.delete<undefined, DeleteUserResponse>(`/users/${userId}`)).data;

export const updateUser = async (user: User) =>
  (
    await client.put<UpdateUserRequest, UpdateUserResponse>(
      `/users/${user.id}`,
      user
    )
  ).data;
