export class CreateAuthDTO {
  userId: number;
  accessToken: string;
  expiresAt: Date | null;
  refreshToken?: string | null;
}
