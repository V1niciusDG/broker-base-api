import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from '../repositories/iuser.repository';
import { IUserDTO } from '../dto/user.dto';

@Injectable()
export class FindUserService {
  constructor(
    @Inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

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
