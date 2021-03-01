import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  controllers: [UserController, AuthController],
  providers: [UserService, AuthService]
})
export class UserModule { }
