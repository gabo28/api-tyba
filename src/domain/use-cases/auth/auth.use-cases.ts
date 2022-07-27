import { Injectable, HttpStatus } from '@nestjs/common';
import { LoginDto } from 'src/domain/dto';
import {  UserUseCases} from '../../use-cases/user/user.use-cases';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthFactoryService } from './auth-factory.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthUseCases {
  constructor(
    private userUseCases: UserUseCases,
    private authFactoryService: AuthFactoryService,
    private jwtService: JwtService
  ) { }


  async validateUser(username, password): Promise<any> {
    const user = await this.userUseCases.findOne(username);
    const valid = await this.authFactoryService.validateUser(password, user.password)
    if(valid) {
      const { password, ...result } = user;
      return result
    }
    return null
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

}