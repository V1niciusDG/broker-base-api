import { Repository } from 'typeorm';
import { AppDataSource } from 'src/database/data-source';
import { Injectable } from '@nestjs/common';
import { Auth } from '../entities/auth.entity';
import { IAuthRepository } from './iauth.repository';

@Injectable()
class AuthRepository implements IAuthRepository {
  private repository: Repository<Auth>;

  constructor() {
    this.repository = AppDataSource.getRepository(Auth);
  }

  async create(auth: Auth): Promise<Auth> {
    return await this.repository.save(auth);
  }

  async findByToken(token: string): Promise<Auth | null> {
    return await this.repository.findOne({
      where: { accessToken: token, isActive: true },
    });
  }
}

export { AuthRepository };
