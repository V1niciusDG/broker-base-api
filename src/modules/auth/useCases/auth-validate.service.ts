// src/modules/auth/auth.service.ts
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { UserRepository } from 'src/modules/user/repositories/user.repository';

@Injectable()
export class AuthValidateService {
  private readonly jwtSecret = process.env.JWT_SECRET || 'default_secret';

  validateToken(token: string): any {
    try {
      return jwt.verify(token, this.jwtSecret);
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
