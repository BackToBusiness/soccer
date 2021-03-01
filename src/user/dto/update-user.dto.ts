import { PartialType } from '@nestjs/mapped-types';
import { AuthCredentialsDto } from '../auth/dto/auth-credentials.dto';

export class UpdateUserDto extends PartialType(AuthCredentialsDto) {}
