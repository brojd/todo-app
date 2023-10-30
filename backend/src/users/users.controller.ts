import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AddUserDTO, EditUserDTO } from './users.dto';
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get('/:id')
  async getUserById(id: string) {
    return this.usersService.getUserById(id);
  }

  @Post()
  async addUser(user: AddUserDTO) {
    return this.usersService.addUser(user);
  }

  @Put('/:id')
  async updateUser(user: EditUserDTO) {
    return this.usersService.updateUser(user);
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
