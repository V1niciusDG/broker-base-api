import { Module } from '@nestjs/common';
import { CreateStockService } from './useCases/create-stock.service';
import { StockRepository } from './repositories/stock.repository';
import { UsersModule } from '../user/users.module';
import { StockController } from './controller/stock.controller';
import { AuthModule } from '../auth/auth.module';
import { UserRepository } from '../user/repositories/user.repository';

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [StockController],
  providers: [
    CreateStockService,
    {
      provide: 'StockRepository',
      useClass: StockRepository,
    },
    {
      provide: 'UserRepository',
      useClass: UserRepository,
    },
  ],
  exports: [CreateStockService],
})
export class StocksModule {}
