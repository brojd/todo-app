import { AxiosResponse } from 'axios';

export type User = {
  id: string;
  name: string;
  surname: string;
};

export type GetAllUsersResponse = AxiosResponse<User[]>;
