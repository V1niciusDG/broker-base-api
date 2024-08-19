import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IUserRepository } from '../repositories/iuser.repository';

@Injectable()
class UpdateUserService {
  constructor(
    @Inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(name: string, email: string): Promise<void> {
    const exists = await this.userRepository.findByEmail(email);
    if (!exists) {
      throw new NotFoundException('USER_NOT_FOUND');
    }

    await this.userRepository.update(email, { name });
  }
}

export { UpdateUserService };
