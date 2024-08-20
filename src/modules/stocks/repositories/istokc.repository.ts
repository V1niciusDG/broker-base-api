import { ICreateStockDTO } from '../dto/create-stock.dto';
import { IStockDTO } from '../dto/stock.dto';
import { IUpdateStockDTO } from '../dto/update-stock.dto';

interface IStockRepository {
  create(data: ICreateStockDTO): Promise<IStockDTO>;
  update(data: IUpdateStockDTO): Promise<void>;
  find(): Promise<IStockDTO[]>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<IStockDTO>;
  findBySymbol(symbol: string): Promise<IStockDTO>;
}

export { IStockRepository };
