import {
  Inject,
  Injectable,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { IStockRepository } from '../repositories/istokc.repository';
import { ICreateStockDTO } from '../dto/create-stock.dto';
import { IUserRepository } from 'src/modules/user/repositories/iuser.repository';
import { IAuthRepository } from 'src/modules/auth/repositories/iauth.repository';
import * as jwt from 'jsonwebtoken';
import { Auth } from 'src/modules/auth/entities/auth.entity';

@Injectable()
export class CreateStockService {
  private readonly jwtSecret = process.env.JWT_SECRET || 'default_secret';

  constructor(
    @Inject('StockRepository')
    private stockRepository: IStockRepository,
    @Inject('UserRepository')
    private userRepository: IUserRepository,
    @Inject('AuthRepository')
    private authRepository: IAuthRepository,
  ) {}

  async execute(data: ICreateStockDTO, token: string): Promise<void> {
    const validToken = await this.authRepository.findByToken(token);
    if (
      !validToken ||
      !validToken.isActive ||
      validToken.expiresAt < new Date()
    ) {
      throw new UnauthorizedException('Invalid or expired token');
    }

    const user = validToken.user;
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    if (user.role === 'client') {
      throw new ForbiddenException('User does not have permission');
    }

    const stockData = {
      ...data,
      userId: user.id,
    };

    await this.stockRepository.create(stockData);
  }
}
