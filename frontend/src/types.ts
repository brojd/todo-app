import { AxiosError } from 'axios';

export type GeneralSuccessfulResponse = {
  ok: true;
};

export type HttpError = AxiosError<{ message: string[] }>;
