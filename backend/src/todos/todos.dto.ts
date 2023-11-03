import {
  IsBoolean,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Todo } from './todos.types';

export class AddTodoDTO implements Omit<Todo, 'id'> {
  @IsString()
  @MinLength(1)
  @MaxLength(50)
  title: string;

  @IsOptional()
  @IsString()
  @MinLength(0)
  @MaxLength(255)
  description?: string;

  @IsOptional()
  @IsBoolean()
  isDone?: boolean;

  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(50)
  assigneeId?: string;
}

export class EditTodoDTO extends AddTodoDTO implements Todo {
  @IsString()
  @MinLength(1)
  @MaxLength(50)
  id: string;
}

export class DeleteTodoDTO implements Pick<Todo, 'id'> {
  @IsString()
  @MinLength(1)
  @MaxLength(50)
  id: string;
}
