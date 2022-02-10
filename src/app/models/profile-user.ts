import {Role} from "./role";

export interface ProfileUser {
  id?: string;
  email: string;
  password: string;
  confirmPassword?: string;
  accessToken?: string;
  enabled?: boolean;
  phoneNumber?: string;
  fullName?: string;
  roles: Role[];
}
