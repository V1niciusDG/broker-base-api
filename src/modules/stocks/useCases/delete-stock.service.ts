// import { Inject, Injectable } from '@nestjs/common';
// import { IStockRepository } from '../repositories/istokc.repository';

// @Injectable()
// class DeleteStockService {
//   constructor(
//     @Inject('StockRepository')
//     private stockRepository: IStockRepository,
//   ) {}

//   async execute(id: number): Promise<void> {
//     const exists = await this.userRepository.findById(id);

//     if (!exists) {
//       throw new Error('USER_NOT_FOUND');
//     }

//     try {
//       await this.userRepository.delete(id);
//     } catch (err) {
//       throw new Error('SQL_ERROR');
//     }
//   }
// }

// export { DeleteUserService };
