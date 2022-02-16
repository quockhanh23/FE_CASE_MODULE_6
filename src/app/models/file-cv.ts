import {ProfileUser} from "./profile-user";

export interface FileCV {
  id?: string,
  fullName?: string
  age?: string
  address?: string
  numberPhone?: string
  experience?: string
  oldWorkplace?: string
  interest?: string
  profileUserId?: ProfileUser;
}
