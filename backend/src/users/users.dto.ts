import { IsString, MaxLength, MinLength } from 'class-validator';
import { User } from './users.types';

export class AddUserDTO implements Omit<User, 'id'> {
  @IsString()
  @MinLength(1)
  @MaxLength(255)
  name: string;

  @IsString()
  @MinLength(1)
  @MaxLength(255)
  surname: string;
}

export class EditUserDTO extends AddUserDTO implements User {
  @IsString()
  @MinLength(1)
  @MaxLength(50)
  id: string;
}

export class DeleteUserDTO implements Pick<User, 'id'> {
  @IsString()
  @MinLength(1)
  @MaxLength(50)
  id: string;
}
