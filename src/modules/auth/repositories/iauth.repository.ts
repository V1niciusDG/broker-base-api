import { Auth } from '../entities/auth.entity';

export interface IAuthRepository {
  create(auth: Auth): Promise<Auth>;
  findByToken(token: string): Promise<Auth | null>;
}
