import { IsString, IsNotEmpty, isBoolean, isEmpty, IsNumber, IsDate } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string
}


