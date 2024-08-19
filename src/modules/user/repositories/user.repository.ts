import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { ICreateUserDTO } from '../dto/create-user.dto';
import { IUserDTO } from '../dto/user.dto';
import { IUpdateUserDTO } from '../dto/update-user.dto';
import { IUserRepository } from './iuser.repository';
import { AppDataSource } from 'src/database/data-source';
import { Injectable } from '@nestjs/common';

@Injectable()
class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }
  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async create({
    name,
    email,
    password,
    role,
  }: ICreateUserDTO): Promise<IUserDTO> {
    return await this.repository.save({
      name,
      email,
      password,
      role,
    });
  }

  async findById(id: number): Promise<IUserDTO> {
    return await this.repository.findOne({ where: { id } });
  }

  async findByEmail(email: string): Promise<IUserDTO> {
    return await this.repository.findOne({ where: { email } });
  }

  async update({ id, name, email }: IUpdateUserDTO): Promise<void> {
    await this.repository.update(id, {
      name,
      email,
    });
  }

  async find(): Promise<IUserDTO[]> {
    return await this.repository.find();
  }
}

export { UserRepository };
