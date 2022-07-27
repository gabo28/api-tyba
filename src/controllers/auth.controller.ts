import { Controller, UseGuards, Post, Body, Res, Request } from '@nestjs/common';
import { LoginDto } from 'src/domain/dto';
import { AuthUseCases } from '../domain/use-cases/auth/auth.use-cases'
import { Response } from 'express';
import { JwtAuthGuard } from 'src/domain/use-cases/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/domain/use-cases/auth/local-auth.guard';

@Controller('api/auth')
export class AuthController {
    constructor(private authUseCases: AuthUseCases) {}

    @UseGuards(LocalAuthGuard)
    @Post()
    async login(@Request() req) {
     return this.authUseCases.login(req.user);
    }
}
