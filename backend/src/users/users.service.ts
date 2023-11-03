import { Injectable, NotFoundException } from '@nestjs/common';
import { GeneralSuccessfulResponse } from 'src/app.types';
import FakeDb from 'src/fake-db';
import { AddUserDTO, EditUserDTO } from './users.dto';
import { User } from './users.types';

@Injectable()
export class UsersService {
  constructor(private readonly fakeDb: FakeDb) {}

  async getAllUsers(): Promise<User[]> {
    return this.fakeDb.users;
  }

  async getUserById(id: User['id']): Promise<User> {
    return this.fakeDb.users.find(({ id: userId }) => userId === id);
  }

  async addUser(user: AddUserDTO): Promise<User> {
    const newUser = {
      ...user,
      id: `${this.fakeDb.users.length + 1}`,
    };
    this.fakeDb.users.push(newUser);
    return newUser;
  }

  async updateUser(user: EditUserDTO): Promise<User> {
    const userIndex = this.fakeDb.users.findIndex(({ id }) => id === user.id);
    if (userIndex === -1) {
      throw new NotFoundException();
    }
    this.fakeDb.users[userIndex] = {
      ...this.fakeDb.users[userIndex],
      ...user,
    };
    return this.fakeDb.users[userIndex];
  }

  async deleteUser(id: User['id']): Promise<GeneralSuccessfulResponse> {
    const userIndex = this.fakeDb.users.findIndex(
      ({ id: userId }) => userId === id,
    );
    this.fakeDb.users.splice(userIndex, 1);
    this.fakeDb.todos.map((todo) =>
      todo.assigneeId === id ? { ...todo, assigneeId: undefined } : todo,
    );
    return { ok: true };
  }
}
