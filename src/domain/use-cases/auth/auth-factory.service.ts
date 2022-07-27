import { Injectable } from '@nestjs/common';
import helper from '../../../infrastructure/helpers/crypto.helper'
import { LoginDto } from 'src/domain/dto';

@Injectable()
export class AuthFactoryService {

  async validateUser (password, hast) {
     return await helper.checkPassword(password, hast)
 }
}
