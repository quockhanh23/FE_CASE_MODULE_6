import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProfileUser} from "../models/profile-user";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {ProfileEnterprise} from "../models/profile-enterprise";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {

  constructor(private http: HttpClient) {
  }

  login(enterprise: ProfileEnterprise): Observable<ProfileEnterprise> {
    return this.http.post<ProfileEnterprise>(API_URL + '/login/enterprise', enterprise);
  }
}
