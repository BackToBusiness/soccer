import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResultCreatedDto } from 'src/common/dto/result-created.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

//https://www.npmjs.com/package/bcrypt

@Injectable()
export class UserService {

  constructor(@InjectRepository(UserRepository) private readonly userRepository: UserRepository) { }

  async create(data: CreateUserDto): Promise<ResultCreatedDto> {
    let user = new User()
    user.username = data.username
    user.password = bcrypt.hashSync(data.password, 8)
    user.email = data.email
    return this.userRepository.save(user)
      .then(() => {
        return <ResultCreatedDto>{
          status: true,
          mensagem: "User has been created"
        }
      })
      .catch((error) => {
        return <ResultCreatedDto>{
          status: false,
          mensagem: `ERROR - Player was not created - \n ${error}`
        }
      })
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(uuid: string) {
    return this.userRepository.findOneOrFail(uuid);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
