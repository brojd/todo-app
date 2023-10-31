import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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
  async getUserById(@Param('id') id: string) {
    const user = await this.usersService.getUserById(id);
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  @Post()
  async addUser(@Body() user: AddUserDTO) {
    return this.usersService.addUser(user);
  }

  @Put('/:id')
  async updateUser(@Body() user: EditUserDTO) {
    return this.usersService.updateUser(user);
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
