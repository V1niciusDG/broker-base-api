import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { ICreateUserDTO } from '../dto/create-user.dto';
import { FindUserService } from '../useCases/find-users.service';
import { CreateUserService } from '../useCases/create-users.service';
import { DeleteUserService } from '../useCases/delete-users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly findUsersService: FindUserService,
    private readonly deleteUsersService: DeleteUserService,
  ) {}

  @Post()
  async create(@Body() createUserDTO: ICreateUserDTO) {
    const newUser = await this.createUserService.create(createUserDTO);
    return {
      message: 'User created successfully',
      user: newUser,
    };
  }

  @Get()
  find() {
    return this.findUsersService.find();
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.deleteUsersService.execute(+id);
    return {
      message: 'User deleted',
    };
  }
}

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.usersService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
//     return this.usersService.update(+id, updateUserDto);
//   }

// }
