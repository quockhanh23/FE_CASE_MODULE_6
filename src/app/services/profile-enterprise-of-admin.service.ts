import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProfileEnterprise} from "../models/profile-enterprise";
import {Observable} from "rxjs";

const API_URL = 'http://localhost:8080/api/admins/findAllEnterprise';
const API_URL_LOCK = 'http://localhost:8080/api/admins/changeLock';
const API_URL_ACTIVE = 'http://localhost:8080/api/admins/changeActive';
const API_URL_VIP = 'http://localhost:8080/api/admins/changeVIP';
const API_FIND_ID = 'http://localhost:8080/api/profileEnterprises';
const API_FIND_STATUS = 'http://localhost:8080/api/profileEnterprises/findStatus';

@Injectable({
  providedIn: 'root'
})
export class ProfileEnterpriseOfAdminService {

  constructor(private httpClient: HttpClient) {
  }
  getAllStatusNotActive(): Observable<ProfileEnterprise[]> {
    return this.httpClient.get<ProfileEnterprise[]>(API_FIND_STATUS)
  }

  getAll(): Observable<ProfileEnterprise[]> {
    return this.httpClient.get<ProfileEnterprise[]>(API_URL)
  }

  getById(id: any): Observable<ProfileEnterprise> {
    return this.httpClient.get<ProfileEnterprise>(API_FIND_ID + `/${id}`)
  }

  changeStatusLock(id: any): Observable<ProfileEnterprise> {
    return this.httpClient.delete<ProfileEnterprise>(API_URL_LOCK + `/${id}`)
  }

  changeStatusActive(id: any): Observable<ProfileEnterprise> {
    return this.httpClient.delete<ProfileEnterprise>(API_URL_ACTIVE + `/${id}`)
  }

  changeStatusVIP(id: any): Observable<ProfileEnterprise> {
    return this.httpClient.delete<ProfileEnterprise>(API_URL_VIP + `/${id}`)
  }
  getAllStatusByOne(): Observable<ProfileEnterprise[]> {
    return this.httpClient.get<ProfileEnterprise[]>(API_FIND_STATUS)
  }
}
