import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProfileEnterprise} from "../models/profile-enterprise";
import {Observable} from "rxjs";

const API_URL = 'http://localhost:8080/api/admins/findAllEnterprise';
const API_URL_LOCK = 'http://localhost:8080/api/admins/changeLock';
const API_URL2_ACTIVE = 'http://localhost:8080/api/admins/changeActive';
const API_FIND = 'http://localhost:8080/api/profileEnterprises';

@Injectable({
  providedIn: 'root'
})
export class ProfileEnterpriseOfAdminService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<ProfileEnterprise[]> {
    return this.httpClient.get<ProfileEnterprise[]>(API_URL)
  }

  getById(id: any): Observable<ProfileEnterprise> {
    return this.httpClient.get<ProfileEnterprise>(API_FIND + `/${id}`)
  }

  changeStatusLock(id: any): Observable<ProfileEnterprise> {
    return this.httpClient.delete<ProfileEnterprise>(API_URL_LOCK + `/${id}`)
  }

  changeStatusActive(id: any): Observable<ProfileEnterprise> {
    return this.httpClient.delete<ProfileEnterprise>(API_URL2_ACTIVE + `/${id}`)
  }
}
