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
