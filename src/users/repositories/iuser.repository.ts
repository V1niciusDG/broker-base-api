import { ICreateUserDTO } from '../dto/create-user.dto';
import { IUpdateUserDTO } from '../dto/update-user.dto';
import { IUserDTO } from '../dto/user.dto';

interface IUserRepository {
  create({ name, email, password, role }: ICreateUserDTO): Promise<IUserDTO>;
  update({ id, name, email }: IUpdateUserDTO): Promise<void>;
  find(): Promise<IUserDTO[]>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<IUserDTO>;
}
export { IUserRepository };
