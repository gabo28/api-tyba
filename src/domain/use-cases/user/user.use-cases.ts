import { Injectable, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from 'src/domain/dto';
import { User } from 'src/domain/models';
import { UserFactoryService } from './user-factory.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserUseCases {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private userFactoryService: UserFactoryService
  ) { }

  async createUser(userDTo: CreateUserDto, res): Promise<User> {
    try {
      const user = await this.userFactoryService.saveUser(userDTo)
      const createUser = await this.usersRepository.save(user);
      const {password, ...result} = createUser;
      return res.status(HttpStatus.CREATED).json(result);
    } catch (error) {
      if(error.code == 'ER_DUP_ENTRY') res.status(HttpStatus.OK).json({statusCode:400, message:'duplicate user',"error": "Bad Request"});
      else throw error;
      
    }
  }

  async findOne(username: string): Promise<User> {
    return await this.usersRepository.findOneBy({ username });
  }

}