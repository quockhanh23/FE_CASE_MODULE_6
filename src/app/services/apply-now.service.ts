import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ApplyNow} from "../models/apply-now";

const API_URL_GET_ONE = "http://localhost:8080/api/cvs";

@Injectable({
  providedIn: 'root'
})
export class ApplyNowService {

  constructor(private http: HttpClient) {
  }

  getById(idRec: any, idCv: any): Observable<ApplyNow[]> {
    return this.http.get<ApplyNow[]>(API_URL_GET_ONE + `/findByRecAndCv?idRec=${idRec}&idCv=` + idCv)
  }
  getByRec(idRec: any): Observable<ApplyNow[]> {
    return this.http.get<ApplyNow[]>(API_URL_GET_ONE + `/findByRec?idRec=${idRec}`)
  }

  findByIdUser(idUser: any): Observable<ApplyNow[]> {
    return this.http.get<ApplyNow[]>(API_URL_GET_ONE + `/findCVByUserId?idUser=` + idUser)
  }
  setStatus(idRec: any, idCv: any): Observable<ApplyNow> {
    return this.http.delete<ApplyNow>(API_URL_GET_ONE + `/setStatus?idRec=${idRec}&idCv=` + idCv)
  }
}
