import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './useCases/auth-token.service';
import { AuthController } from './controller/auth.controller';
import { AuthRepository } from './repositories/auth.repository';
import { UserRepository } from '../user/repositories/user.repository';
import { UsersModule } from '../user/users.module';
import { AuthValidateService } from './useCases/auth-validate.service';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'defaultSecret',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthValidateService,
    {
      provide: 'AuthRepository',
      useClass: AuthRepository,
    },
    {
      provide: 'UserRepository',
      useClass: UserRepository,
    },
  ],
  exports: [
    AuthService,
    {
      provide: 'AuthRepository',
      useClass: AuthRepository,
    },
    {
      provide: 'UserRepository',
      useClass: UserRepository,
    },
  ],
})
export class AuthModule {}
