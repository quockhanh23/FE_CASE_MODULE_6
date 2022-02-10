import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProfileUser} from "../models/profile-user";
import {environment} from "../../environments/environment";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(user: ProfileUser): Observable<ProfileUser> {
    return this.http.post<ProfileUser>(API_URL + '/login/user', user);
  }
  register(user: ProfileUser): Observable<ProfileUser> {
    return this.http.post<ProfileUser>(API_URL + '/register/enterprise', user);
  }
}
