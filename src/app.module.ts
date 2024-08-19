import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AppDataSource } from './database/data-source';
import { UsersModule } from './modules/user/users.module';

@Module({
  imports: [UsersModule],
})
export class AppModule {
  constructor() {
    AppDataSource.initialize();
  }
}
