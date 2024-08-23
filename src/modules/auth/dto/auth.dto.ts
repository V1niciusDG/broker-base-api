export class AuthDTO {
  id: number;
  userId: number;
  accessToken: string;
  createdAt: Date;
  expiresAt: Date | null;
  isActive: boolean;
  refreshToken: string | null;
}
