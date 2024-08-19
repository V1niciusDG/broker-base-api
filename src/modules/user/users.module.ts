import { Module } from '@nestjs/common';

import { UserRepository } from './repositories/user.repository';

import { UsersController } from './controller/users.controller';
import { CreateUserService } from './useCases/create-users.service';
import { FindUserService } from './useCases/find-users.service';
import { DeleteUserService } from './useCases/delete-users.service';
import { UpdateUserService } from './useCases/update-users.service';

// @Module({
//   controllers: [UsersController],
//   providers: [UsersService],
// })
// export class UsersModule {}

@Module({
  controllers: [UsersController],
  providers: [
    CreateUserService,
    FindUserService,
    DeleteUserService,
    UpdateUserService,
    {
      provide: 'UserRepository',
      useClass: UserRepository,
    },
  ],
})
export class UsersModule {}
