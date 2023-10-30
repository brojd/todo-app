import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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
  async getTodoById(id: string) {
    return this.todosService.getTodoById(id);
  }

  @Post()
  async addTodo(todo: AddTodoDTO) {
    return this.todosService.addTodo(todo);
  }

  @Put('/:id')
  async updateTodo(todo: EditTodoDTO) {
    return this.todosService.updateTodo(todo);
  }

  @Delete('/:id')
  async deleteTodo(@Param('id') id: string) {
    return this.todosService.deleteTodo(id);
  }
}
