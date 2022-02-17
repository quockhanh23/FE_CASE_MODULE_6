import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ProfileEnterprise} from "../models/profile-enterprise";
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {ApplyNow} from "../models/apply-now";

const API_URL_GET_ONE = "http://localhost:8080/api/cvs";
@Injectable({
  providedIn: 'root'
})
export class ApplyNowService {

  constructor(private http: HttpClient,
              public dialog: MatDialog,
              private toarts: ToastrService,
              private router: Router,) { }
  getById(idRec: any,idCv: any): Observable<ApplyNow[]> {
    return this.http.get<ApplyNow[]>(API_URL_GET_ONE + `/findByRecAndCv?idRec=${idRec}&idCv=` + idCv)
  }
  findByIdUser(idUser:any): Observable<ApplyNow[]> {
    return this.http.get<ApplyNow[]>(API_URL_GET_ONE + `/findCVByUserId?idUser=` + idUser)
  }
}
