import { Module } from '@nestjs/common';
import { AuthUseCases } from './auth.use-cases';
import { UserUseCasesModule } from '../user/user-use-cases.module';
import { AuthFactoryService } from './auth-factory.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
imports: [
  UserUseCasesModule,
  PassportModule,
  JwtModule.register({
    secret: 'xas',
    signOptions: { expiresIn: '120s' },
  }),],
providers: [AuthUseCases, AuthFactoryService, LocalStrategy, JwtStrategy],
exports: [AuthUseCases, AuthFactoryService]

})
export class AuthUseCasesModule {}
