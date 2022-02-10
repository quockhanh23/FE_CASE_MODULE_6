import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProfileEnterprise} from "../models/profile-enterprise";
import {Observable} from "rxjs";

const API_URL = 'http://localhost:8080/api/admins/findAllEnterprise';
const API_URL_LOCK = 'http://localhost:8080/api/admins/changeLock';
const API_URL2_ACTIVE = 'http://localhost:8080/api/admins/changeActive';

@Injectable({
  providedIn: 'root'
})
export class ProfileEnterpriseOfAdminService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<ProfileEnterprise[]> {
    return this.httpClient.get<ProfileEnterprise[]>(API_URL)
  }
  changeStatusLock(id: any): Observable<ProfileEnterprise> {
    return this.httpClient.delete<ProfileEnterprise>(API_URL_LOCK + `/${id}`)
  }
  changeStatusActive(id: any): Observable<ProfileEnterprise> {
    return this.httpClient.delete<ProfileEnterprise>(API_URL2_ACTIVE + `/${id}`)
  }
}
