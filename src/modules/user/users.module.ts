import { Module } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';
import { CreateUserService } from './useCases/create-users.service';
import { UsersController } from './controller/users.controller';
import { DeleteUserService } from './useCases/delete-users.service';
import { UpdateUserService } from './useCases/update-users.service';
import { FindUserService } from './useCases/find-users.service';

@Module({
  controllers: [UsersController],
  providers: [
    CreateUserService,
    DeleteUserService,
    UpdateUserService,
    FindUserService,
    {
      provide: 'UserRepository',
      useClass: UserRepository,
    },
  ],
  exports: [CreateUserService, 'UserRepository'],
})
export class UsersModule {}
