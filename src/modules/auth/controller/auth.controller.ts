// src/modules/auth/auth.controller.ts
import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../useCases/auth-token.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body() body: { email: string; password: string },
  ): Promise<{ token: string }> {
    const { email, password } = body;
    try {
      const token = await this.authService.generateToken(email, password);
      return { token };
    } catch (error) {
      throw new UnauthorizedException('Invalid credentials');
    }
  }

  @Post('validate')
  validateToken(@Body() body: { token: string }): any {
    const { token } = body;
    try {
      return this.authService.validateToken(token);
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
