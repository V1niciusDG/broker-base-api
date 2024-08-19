import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { UsersController } from './users/users.controller';
import { AppDataSource } from './database/data-source';

@Module({
  imports: [UsersModule],
})
export class AppModule {
  constructor() {
    AppDataSource.initialize();
  }
}
