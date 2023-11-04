import { makeAutoObservable } from 'mobx';
import { HttpError } from 'types';
import { LoadingState } from './store.types';

class CommonStore {
  loadingStates: Record<string, LoadingState> = {};
  errors: Record<string, HttpError> = {};

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setLoadingState(actionKey: string, state: LoadingState) {
    this.loadingStates[actionKey] = state;
  }

  setError(actionKey: string, error: HttpError) {
    this.errors[actionKey] = error;
  }

  deleteError(actionKey: string) {
    delete this.errors[actionKey];
  }

  get allErrors() {
    return Object.values(this.errors);
  }
}

export default new CommonStore();
