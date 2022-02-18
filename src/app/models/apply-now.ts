import {FileCV} from "./file-cv";
import {Recruitments} from "./recruitments";
import {StatusConfirmOfApplyNow} from "./status-confirm-of-apply-now";

export interface ApplyNow {
  id?: string,
  fileCVId?: FileCV,
  recruitmentId?: Recruitments,
  statusConfirmId?: StatusConfirmOfApplyNow
}
