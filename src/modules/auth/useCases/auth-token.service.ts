// src/modules/auth/auth.service.ts
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { UserRepository } from 'src/modules/user/repositories/user.repository';

@Injectable()
export class AuthService {
  private readonly jwtSecret = process.env.JWT_SECRET || 'default_secret';

  constructor(
    @Inject('UserRepository') private readonly userRepository: UserRepository,
  ) {}

  async generateToken(email: string, password: string): Promise<string> {
    const user = await this.userRepository.findByEmail(email);
    if (user && user.password === password) {
      const payload = { email: user.email, sub: user.id };
      return jwt.sign(payload, this.jwtSecret, { expiresIn: '1h' });
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  validateToken(token: string): any {
    try {
      return jwt.verify(token, this.jwtSecret);
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
