import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';

import { ICreateUserDTO } from '../dto/create-user.dto';
import { FindUserService } from '../useCases/find-users.service';
import { CreateUserService } from '../useCases/create-users.service';
import { DeleteUserService } from '../useCases/delete-users.service';
import { IUpdateUserDTO } from '../dto/update-user.dto';
import { UpdateUserService } from '../useCases/update-users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly findUsersService: FindUserService,
    private readonly deleteUsersService: DeleteUserService,
    private readonly updateUsersService: UpdateUserService,
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

  @Put()
  async update(@Query('email') email: string, @Body() body: { name: string }) {
    await this.updateUsersService.execute(body.name, email);
    return {
      message: 'User name updated successfully',
    };
  }
}

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.usersService.findOne(+id);
//   }

// }
