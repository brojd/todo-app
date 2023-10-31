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
import { AddTodoDTO, EditTodoDTO } from './todos.dto';
import { TodosService } from './todos.service';

@Controller('/todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  async getAllTodos() {
    return this.todosService.getAllTodos();
  }

  @Get('/:id')
  async getTodoById(@Param('id') id: string) {
    const todo = await this.todosService.getTodoById(id);
    if (!todo) {
      throw new NotFoundException();
    }
    return todo;
  }

  @Post()
  async addTodo(@Body() todo: AddTodoDTO) {
    return this.todosService.addTodo(todo);
  }

  @Put('/:id')
  async updateTodo(@Body() todo: EditTodoDTO) {
    return this.todosService.updateTodo(todo);
  }

  @Delete('/:id')
  async deleteTodo(@Param('id') id: string) {
    return this.todosService.deleteTodo(id);
  }
}
