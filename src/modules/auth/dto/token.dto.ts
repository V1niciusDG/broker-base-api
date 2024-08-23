export interface TokenDTO {
  email: string;
  sub: number;
  iat?: number;
  exp?: number;
}
