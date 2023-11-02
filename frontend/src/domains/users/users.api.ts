import client from 'services/http.service';
import { GetAllUsersResponse } from './users.types';

export const getAllUsers = async () =>
  (await client.get<undefined, GetAllUsersResponse>('/users')).data;
