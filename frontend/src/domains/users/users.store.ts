import { makeAutoObservable, runInAction } from 'mobx';
import { AutoLoadingState } from 'store/store.decorators';
import { getAllUsers } from './users.api';
import { User } from './users.types';

class UsersStore {
  users: User[] = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  @AutoLoadingState()
  async getAllUsers() {
    const users = await getAllUsers();
    runInAction(() => {
      this.users = users;
    });
  }
}

export default new UsersStore();
