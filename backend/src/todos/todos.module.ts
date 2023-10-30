import { Module } from '@nestjs/common';
import FakeDb from 'src/fake-db';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';

@Module({
  imports: [],
  controllers: [TodosController],
  providers: [TodosService, FakeDb],
})
export class TodosModule {}
