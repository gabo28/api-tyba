import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserController, AuthController, RestaurantController } from './controllers/';
import { AuthUseCasesModule } from './domain/use-cases/auth/auth-use-cases.module';
import { UserUseCasesModule } from './domain/use-cases/user/user-use-cases.module';
import { DataBaseModule } from './infrastructure/driven-adapters/mysql/database.module';

@Module({
  imports: [
    AuthUseCasesModule, 
    UserUseCasesModule,
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV
      ? `.${process.env.NODE_ENV}.env`
      : '.dev.env'
    }),
    DataBaseModule
  ],
    
  controllers: [
  UserController,
  AuthController,
  RestaurantController ],
  providers: [],
})
export class AppModule {}
