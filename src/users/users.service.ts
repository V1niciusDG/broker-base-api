import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from './repositories/iuser.repository';
import { ICreateUserDTO } from './dto/create-user.dto';
import { IUserDTO } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}
  async create({ name, email, password, role }: ICreateUserDTO): Promise<void> {
    if (!password) {
      throw new Error('PASSWORD_REQUIRED');
    }

    await this.userRepository.create({ name, email, password, role });
  }

  async find(): Promise<IUserDTO[]> {
    return this.userRepository.find();
  }
}

//   findOne(id: number) {
//     return `This action returns a #${id} user`;
//   }

//   update(id: number, updateUserDto: UpdateUserDto) {
//     return `This action updates a #${id} user`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} user`;
//   }
// }
