import { isEqual } from 'lodash-es';
import { makeAutoObservable, runInAction } from 'mobx';
import { AutoLoadingState } from 'store/store.decorators';
import { ActionKey } from 'store/store.types';
import { omitUndefined } from 'utils';
import { addUser, deleteUser, getAllUsers, updateUser } from './users.api';
import type { User } from './users.types';

class UsersStore {
  users: User[] = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  @AutoLoadingState(ActionKey.GetAllUsers)
  async getAllUsers() {
    const users = await getAllUsers();
    runInAction(() => {
      this.users = users;
    });
  }

  @AutoLoadingState(ActionKey.AddUser)
  async addUser(user: User) {
    const newUser = await addUser(user);
    runInAction(() => {
      this.users.push(newUser);
    });
  }

  @AutoLoadingState((user: User) => `${ActionKey.UpdateUser}-${user.id}`)
  async updateUser(user: User) {
    const existingUser = this.users.find(({ id }) => id === user.id);
    if (isEqual(omitUndefined(existingUser), omitUndefined(user))) {
      return;
    }
    const updatedUser = await updateUser(user);
    runInAction(() => {
      const idx = this.users.findIndex(({ id }) => id === user.id);
      this.users[idx] = updatedUser;
    });
  }

  @AutoLoadingState((userId: string) => `${ActionKey.DeleteUser}-${userId}`)
  async deleteUser(userId: User['id']) {
    await deleteUser(userId);
    runInAction(() => {
      const idx = this.users.findIndex(({ id }) => id === userId);
      this.users.splice(idx, 1);
    });
  }
}

export default new UsersStore();
