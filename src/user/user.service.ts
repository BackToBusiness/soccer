import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(@InjectRepository(UserRepository) private readonly userRepository: UserRepository) { }

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
