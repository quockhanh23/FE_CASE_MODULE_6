import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProfileUser} from "../models/profile-user";
import {environment} from "../../environments/environment";

const API_URL = environment.apiUrl;
const API_URL_UPDATE = 'http://localhost:8080/users'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  login(user: ProfileUser): Observable<ProfileUser> {
    return this.http.post<ProfileUser>(API_URL + '/login/user', user);
  }

  register(enterprise: ProfileUser): Observable<ProfileUser> {
    return this.http.post<ProfileUser>(API_URL + '/register/user', enterprise);
  }

  getAll(): Observable<ProfileUser[]> {
    return this.http.get<ProfileUser[]>(API_URL + '/users')
  }

  update(id: any, profileUser: ProfileUser): Observable<ProfileUser> {
    return this.http.put<ProfileUser>(API_URL_UPDATE + `/${id}`, profileUser)
  }

  getById(id: any): Observable<ProfileUser> {
    return this.http.get<ProfileUser>(API_URL + '/users' + `/${id}`)
  }
}
