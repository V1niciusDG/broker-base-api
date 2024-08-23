import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { UserRepository } from 'src/modules/user/repositories/user.repository';
import { AuthRepository } from 'src/modules/auth/repositories/auth.repository';
import { Auth } from 'src/modules/auth/entities/auth.entity';
import { User } from 'src/modules/user/entities/user.entity';

@Injectable()
export class AuthService {
  private readonly jwtSecret = process.env.JWT_SECRET || 'default_secret';

  constructor(
    @Inject('UserRepository') private readonly userRepository: UserRepository,
    @Inject('AuthRepository') private readonly authRepository: AuthRepository,
  ) {}

  async generateToken(email: string, password: string): Promise<string> {
    const userDTO = await this.userRepository.findByEmail(email);

    if (!userDTO) {
      throw new UnauthorizedException('USER_NOT_FOUND');
    }

    if (userDTO.password !== password) {
      throw new UnauthorizedException('INCORRECT_PASSWORD');
    }

    const payload = { email: userDTO.email, sub: userDTO.id };
    const token = jwt.sign(payload, this.jwtSecret, { expiresIn: '1h' });

    // Mapeia o DTO para a entidade User
    const user = new User();
    user.id = userDTO.id;
    user.email = userDTO.email;
    user.password = userDTO.password;
    user.role = userDTO.role;

    // Salva o token no banco de dados
    const authRecord = new Auth(
      user,
      token,
      new Date(Date.now() + 3600 * 1000), // Expiração em 1 hora
      null,
    );

    await this.authRepository.create(authRecord);

    return token;
  }
}
