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
  name: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(255)
  description?: string;

  @IsOptional()
  @IsBoolean()
  @MinLength(1)
  @MaxLength(50)
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
