import { Repository } from 'typeorm';

import { ICreateStockDTO } from '../dto/create-stock.dto';
import { IStockDTO } from '../dto/stock.dto';
import { AppDataSource } from 'src/database/data-source';
import { Injectable } from '@nestjs/common';
import { Stock } from '../entities/stock.entity';
import { IUpdateStockDTO } from '../dto/update-stock.dto';
import { IStockRepository } from './istokc.repository';

@Injectable()
class StockRepository implements IStockRepository {
  private repository: Repository<Stock>;

  constructor() {
    this.repository = AppDataSource.getRepository(Stock);
  }
  // async create(data: ICreateStockDTO): Promise<void> {
  //   await this.repository.save(data);
  // }

  async create(data: ICreateStockDTO): Promise<IStockDTO> {
    const stock = this.repository.create(data);
    await this.repository.save(stock);
    return stock; // Retorna o estoque criado
  }

  async update(data: IUpdateStockDTO): Promise<void> {
    const id = data.id;
    delete data.id;

    await this.repository.update(id, data);
  }

  async find(): Promise<IStockDTO[]> {
    return await this.repository.find();
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async findById(id: number): Promise<IStockDTO> {
    return await this.repository.findOne({ where: { id } });
  }

  async findBySymbol(symbol: string): Promise<IStockDTO> {
    return await this.repository.findOne({ where: { symbol } });
  }
}

export { StockRepository };
