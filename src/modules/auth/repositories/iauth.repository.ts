import { AuthTokenDTO } from '../dto/auth-token.dto';
import { CreateAuthTokenDTO } from '../dto/create-auth-stock.dto';

interface IAuthRepository {
  create(data: CreateAuthTokenDTO): Promise<AuthTokenDTO>;
  findByEmail(email: string): Promise<AuthTokenDTO | null>;
}

export { IAuthRepository };
