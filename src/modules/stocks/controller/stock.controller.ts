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
  Request,
} from '@nestjs/common';
import { CreateStockService } from '../useCases/create-stock.service';
import { ICreateStockDTO } from '../dto/create-stock.dto';

@Controller('stocks')
export class StockController {
  constructor(private readonly createStockService: CreateStockService) {}

  @Post()
  async execute(@Body() data: ICreateStockDTO, @Query('token') token: string) {
    try {
      await this.createStockService.execute(data, token);
      return {
        message: 'Stock created successfully',
      };
    } catch (error) {
      return {
        message: error.message,
      };
    }
  }
}
// @Get()
// find() {
//   return this.findUsersService.find();
// }

// @Delete(':id')
// async remove(@Param('id') id: string) {
//   await this.deleteUsersService.execute(+id);
//   return {
//     message: 'User deleted',
//   };
// }

// @Put()
// async update(@Query('email') email: string, @Body() body: { name: string }) {
//   await this.updateUsersService.execute(body.name, email);
//   return {
//     message: 'User name updated successfully',
//   };
// }

// @Get(':id')
// findOne(@Param('id') id: string) {
//   return this.usersService.findOne(+id);
// }
