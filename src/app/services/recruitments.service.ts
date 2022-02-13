import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Recruitments} from "../models/recruitments";
import {ProfileEnterprise} from "../models/profile-enterprise";

const API_URL = environment.apiUrl;
const API_SEARCH_NAME_ALL = 'http://localhost:8080/api/recruitments'
const API_SORT_BY_NEW = 'http://localhost:8080/api/recruitments/sortNewJob'
const API_URL_HIDDEN = 'http://localhost:8080/api/admins/changePrivateRecruitment'
const API_URL_PUBLIC = 'http://localhost:8080/api/admins/changePublicRecruitment'

@Injectable({
  providedIn: 'root'
})
export class RecruitmentsService {

  constructor(private http: HttpClient) {
  }

  listRecruitmentsAll(): Observable<Recruitments[]> {
    return this.http.get<Recruitments[]>(API_URL + '/api/recruitments')
  }

  findById(id: String): Observable<Recruitments> {
    return this.http.get<Recruitments>(API_URL + '/api/recruitments' + `/${id}`)
  }

  searchByName(name: string): Observable<Recruitments[]> {
    return this.http.get<Recruitments[]>(API_SEARCH_NAME_ALL + `/name/?q=${name}`)
  }

  listRecruitmentsAllOrderByDate(): Observable<Recruitments[]> {
    return this.http.get<Recruitments[]>(API_URL + '/api/recruitments/sort')
  }

  myListRecruitments(id: any): Observable<Recruitments[]> {
    return this.http.get<Recruitments[]>(API_URL + '/api/profileEnterprises' + `/${id}` + '/myListRecruitment')
  }

  changeStatusHidden(id: any): Observable<ProfileEnterprise> {
    return this.http.delete<ProfileEnterprise>(API_URL_HIDDEN + `/${id}`)
  }

  changeStatusPublic(id: any): Observable<ProfileEnterprise> {
    return this.http.delete<ProfileEnterprise>(API_URL_PUBLIC + `/${id}`)
  }

  sortByNewRecruitments() {
    return this.http.get<Recruitments[]>(API_SORT_BY_NEW)
  }
}

