import { Module } from '@nestjs/common';
import { CreateStockService } from './useCases/create-stock.service';
import { StockRepository } from './repositories/stock.repository';
import { UsersModule } from '../user/users.module';
import { StockController } from './controller/stock.controller';

@Module({
  imports: [UsersModule],
  controllers: [StockController],
  providers: [
    CreateStockService,
    {
      provide: 'StockRepository',
      useClass: StockRepository,
    },
  ],
})
export class StocksModule {}
