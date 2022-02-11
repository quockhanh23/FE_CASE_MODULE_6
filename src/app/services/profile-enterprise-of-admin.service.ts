import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProfileEnterprise} from "../models/profile-enterprise";
import {Observable} from "rxjs";

const API_URL = 'http://localhost:8080/api/admins/findAllEnterprise';

@Injectable({
  providedIn: 'root'
})
export class ProfileEnterpriseOfAdminService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<ProfileEnterprise[]> {
    return this.httpClient.get<ProfileEnterprise[]>(API_URL)
  }

}
