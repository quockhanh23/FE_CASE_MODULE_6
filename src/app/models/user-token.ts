import {Role} from "./role";

export interface UserToken {
  id?: string;
  email: string;
  password: string;
  confirmPassword?: string;
  accessToken?: string;
  enabled?: boolean;
  roles: Role[];
}
