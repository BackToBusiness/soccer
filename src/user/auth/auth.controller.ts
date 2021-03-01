import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('signUp')
    signUp(@Body() createUserDto: CreateUserDto): Promise<void> {
        return this.authService.signUp(createUserDto)
    }

    @Post('signIn')
    signIn(@Body() authCredentialsDto: AuthCredentialsDto): Promise<string> {
        return this.authService.signIn(authCredentialsDto)
    }
}
