import {Role} from "./role";

export interface ProfileEnterprise {
  id?: string,
  nameCompany?: string,
  description?: string,
  image?: string
  addressCompany?: string
  numberOfEmployees?: string
  phoneNumbers?: string
  linkWebsites?: string
  linkFacebook?: string
  linkGoogleMaps?: string
  email?: string
  password?: string
  confirmPassword?: string
  roles: Role[];
}
