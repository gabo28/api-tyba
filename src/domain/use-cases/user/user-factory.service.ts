import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/domain/dto';
import { User } from '../../models/index'
import helper from '../../../infrastructure/helpers/crypto.helper'

@Injectable()
export class UserFactoryService {

     async saveUser(userDto:CreateUserDto){
        const user = new User();
        user.name = userDto.name;
        user.username = userDto.username;
        user.password = await helper.encriptPassword(userDto.password)
        return user
    }

}
