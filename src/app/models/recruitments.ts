import {StatusRecruitment} from "./status-recruitment";
import {Work} from "./work";
import {Position} from "./position";
import {ProfileEnterprise} from "./profile-enterprise";

export interface Recruitments {
  id?: string,
  title?: string,
  salary?: string,
  address?: string,
  description?: string,
  experience?: string,
  numberOfRecruitments?: string,
  dateEnd?: Date,
  gender?: string,
  statusRecruitment?: StatusRecruitment,
  work?: Work,
  position?: Position,
  profileEnterprise?: ProfileEnterprise
}

