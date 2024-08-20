// import { Inject, Injectable, NotFoundException } from '@nestjs/common';
// import { IStockRepository } from '../repositories/istokc.repository';

// @Injectable()
// class UpdateStockService {
//   constructor(
//     @Inject('StockRepository')
//     private stockRepository: IStockRepository,
//   ) {}

//   async execute(name: string, email: string): Promise<void> {
//     const exists = await this.userRepository.findByEmail(email);
//     if (!exists) {
//       throw new NotFoundException('USER_NOT_FOUND');
//     }

//     await this.userRepository.update(email, { name });
//   }
// }

// export { UpdateUserService };
