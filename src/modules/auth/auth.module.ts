// src/modules/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { UsersModule } from '../user/users.module';
import { AuthService } from './useCases/auth-token.service';
import { AuthController } from './controller/auth.controller';

@Module({
  imports: [UsersModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
