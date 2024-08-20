import { Repository } from 'typeorm';
import { AppDataSource } from 'src/database/data-source';
import { Injectable } from '@nestjs/common';
import { AuthTokenDTO } from '../dto/auth-token.dto';
import { CreateAuthTokenDTO } from '../dto/create-auth-stock.dto';
import { IAuthRepository } from './iauth.repository';
import { Auth } from '../entities/auth.entity';

@Injectable()
class AuthRepository implements IAuthRepository {
  private repository: Repository<Auth>;

  constructor() {
    this.repository = AppDataSource.getRepository(Auth);
  }
  create(data: CreateAuthTokenDTO): Promise<AuthTokenDTO> {
    throw new Error('Method not implemented.');
  }
  findByEmail(email: string): Promise<AuthTokenDTO | null> {
    throw new Error('Method not implemented.');
  }
}

export { AuthRepository };
