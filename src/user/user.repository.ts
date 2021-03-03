import { EntityRepository, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { ConflictException } from '@nestjs/common';
import { STATUS_CODE_CONFLICT } from './exceptions/user.constants.exception';
import * as bcrypt from 'bcrypt';
import { AuthCredentialsDto } from './auth/dto/auth-credentials.dto';
import { CreateUserDto } from './dto/create-user.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User>{

    async signUp(createUserDto: CreateUserDto): Promise<void> {
        const { username, password, email } = createUserDto;
        const user = new User()
        user.username = username
        user.email = email
        user.salt = await bcrypt.genSalt()
        user.password = await this.hashPassword(password, user.salt);
        try {
            await user.save()
        } catch (error) {
            if (error.code === STATUS_CODE_CONFLICT) {
                throw new ConflictException({
                    statusCode: 409,
                    message: error.detail
                })
            }
        }
    }

    async validateUserPassword(authCredentialsDto: AuthCredentialsDto): Promise<string> {
        const { username, password } = authCredentialsDto;
        const user = await this.findOne({ username });

        return (user && await user.validatePassword(password)) ? user.username : null
    }

    private async hashPassword(password: string, salt: string): Promise<string> {
        return bcrypt.hash(password, salt);
    }
}