import { makeAutoObservable } from 'mobx';
import { LoadingState } from './store.types';

class CommonStore {
  loadingStates: Record<string, LoadingState> = {};

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setLoadingState(key: string, state: LoadingState) {
    this.loadingStates[key] = state;
  }
}

export default new CommonStore();
