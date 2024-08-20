import { Inject, Injectable } from '@nestjs/common';
import { IStockRepository } from '../repositories/istokc.repository';
import { ICreateStockDTO } from '../dto/create-stock.dto';
import { IUserRepository } from 'src/modules/user/repositories/iuser.repository';

@Injectable()
export class CreateStockService {
  constructor(
    @Inject('StockRepository')
    private stockRepository: IStockRepository,
    @Inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(
    data: ICreateStockDTO,
    email: string,
    password: string,
  ): Promise<void> {
    const existingUser = await this.userRepository.findByEmail(email);
    if (!existingUser || existingUser.password !== password) {
      throw new Error('USER_NOT_FOUND_OR_INVALID_PASSWORD');
    }

    if (existingUser.role === 'client') {
      throw new Error('USER_NOT_PERMISSION');
    }

    const stockData = {
      ...data,
      userId: existingUser.id,
    };

    await this.stockRepository.create(stockData);
  }
}
