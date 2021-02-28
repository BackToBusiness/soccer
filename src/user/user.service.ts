import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { STATUS_CODE_CONFLICT } from '../player/user.constants.exception';

//https://www.npmjs.com/package/bcrypt

@Injectable()
export class UserService {

  constructor(@InjectRepository(UserRepository) private readonly userRepository: UserRepository) { }

  async create(data: CreateUserDto): Promise<void> {
    let user = new User()
    user.username = data.username
    const salt = await bcrypt.genSalt()
    user.password = await this.hashPassword(data.password, salt)
    user.email = data.email

    try {
      await this.userRepository.save(user)
    } catch (error) {
      if (error.code === STATUS_CODE_CONFLICT) {
        throw new ConflictException({
          statusCode: 409,
          message: error.detail
        })
      }
    }
  }

  private hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt)
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(uuid: string) {
    return this.userRepository.findOneOrFail(uuid);
  }

  update(id: number) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
