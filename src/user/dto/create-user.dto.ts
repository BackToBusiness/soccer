import { Exclude } from 'class-transformer';
import { User } from '../entities/user.entity';

export class CreateUserDto {
    username: string
    password: string
    email: string
}
