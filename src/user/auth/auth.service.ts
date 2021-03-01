import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from '../user.repository';
import { User } from '../entities/user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { UnauthorizedException } from '@nestjs/common';

export class AuthService {

    constructor(@InjectRepository(User) private userRepository: UserRepository) { }

    async signUp(createUserDto: CreateUserDto): Promise<void> {
        return this.userRepository.signUp(createUserDto)
    }

    async signIn(authCredentialsDto: AuthCredentialsDto): Promise<string> {
        const username = await this.userRepository.validateUserPassword(authCredentialsDto)
        if (!username) {
            throw new UnauthorizedException
        }
        return username
    }
}