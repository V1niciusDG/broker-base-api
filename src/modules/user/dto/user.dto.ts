import { UserRoleEnum } from '../enum/user-role.enum';

export class IUserDTO {
  id: number;
  name: string;
  email: string;
  password: string;
  role: UserRoleEnum;
}
