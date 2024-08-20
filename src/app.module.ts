import { Module } from '@nestjs/common';
import { AppDataSource } from './database/data-source';
import { UsersModule } from './modules/user/users.module';
import { StocksModule } from './modules/stocks/stock.module';

@Module({
  imports: [UsersModule, StocksModule],
})
export class AppModule {
  constructor() {
    AppDataSource.initialize();
  }
}
