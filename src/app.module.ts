import { Module } from '@nestjs/common';
import { AppDataSource } from './database/data-source';
import { UsersModule } from './modules/user/users.module';
import { StocksModule } from './modules/stocks/stock.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [UsersModule, StocksModule, AuthModule],
})
export class AppModule {
  constructor() {
    AppDataSource.initialize();
  }
}
