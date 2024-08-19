import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from '../repositories/iuser.repository';
import { ICreateUserDTO } from '../dto/create-user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class CreateUserService {
  constructor(
    @Inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async create({ name, email, password, role }: ICreateUserDTO): Promise<void> {
    if (!password) throw new Error('PASSWORD_REQUIRED');

    const exists = await this.userRepository.findByEmail(email);
    if (exists) throw new Error('USER_ALREADY_EXISTS');

    const passwordHash = await bcrypt.hash(password, 8);

    await this.userRepository.create({
      name,
      email,
      password: passwordHash,
      role,
    });
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
