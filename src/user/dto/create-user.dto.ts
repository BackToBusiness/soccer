import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {

    @IsNotEmpty({ message: 'Username cannot be null or empty' })
    username: string

    @IsNotEmpty({ message: 'Password cannot be null or empty' })
    password: string

    @IsEmail()
    @IsNotEmpty({ message: 'Email cannot be null or empty' })
    email: string
}
