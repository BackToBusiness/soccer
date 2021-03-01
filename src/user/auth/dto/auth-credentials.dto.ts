import { IsNotEmpty } from 'class-validator';

export class AuthCredentialsDto {

    @IsNotEmpty({ message: 'Username cannot be null or empty' })
    username: string

    @IsNotEmpty({ message: 'Password cannot be null or empty' })
    password: string

}
