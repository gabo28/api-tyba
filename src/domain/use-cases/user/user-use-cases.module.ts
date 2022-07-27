import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/domain/models';
import { UserFactoryService } from './user-factory.service';
import { UserUseCases } from './user.use-cases';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([User])],
  providers: [UserFactoryService, UserUseCases],
  exports: [UserFactoryService, UserUseCases]
})
export class UserUseCasesModule {}
