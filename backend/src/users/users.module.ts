import { Module } from '@nestjs/common';
import FakeDb from 'src/fake-db';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService, FakeDb],
})
export class UsersModule {}
