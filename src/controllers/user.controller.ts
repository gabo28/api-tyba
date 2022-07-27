import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { CreateUserDto } from 'src/domain/dto';
import { UserUseCases } from '../domain/use-cases/user/user.use-cases'
import { Response } from 'express';

@Controller('api/user')
export class UserController {
    constructor(private userUseCases: UserUseCases) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
      return this.userUseCases.createUser(createUserDto, res);
    }
}
