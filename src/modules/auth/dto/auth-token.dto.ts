export class AuthTokenDTO {
  id: number;
  access_token: string;

  constructor(id: number, access_token: string) {
    this.id = id;
    this.access_token = access_token;
  }
}
