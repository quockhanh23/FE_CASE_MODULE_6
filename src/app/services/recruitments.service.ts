import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Recruitments} from "../models/recruitments";
import {ProfileEnterprise} from "../models/profile-enterprise";

const API_URL = environment.apiUrl;
const API_SEARCH_NAME_ALL = 'http://localhost:8080/api/recruitments'
const API_URL_HIDDEN = 'http://localhost:8080/api/admins/changePrivateRecruitment'
const API_URL_PUBLIC = 'http://localhost:8080/api/admins/changePublicRecruitment'
const API_URL_VIP = 'http://localhost:8080/api/admins/changeProposalVIPRecruitment'

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
  register(recruitment: Recruitments,idEnterprise : any): Observable<Recruitments> {
    return this.http.post<Recruitments>(API_URL + '/api/recruitments/create' + `?idEnterprise=${idEnterprise}`, recruitment);
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

  changeStatusVIP(id: any): Observable<ProfileEnterprise> {
    return this.http.delete<ProfileEnterprise>(API_URL_VIP + `/${id}`)
  }

  sortByNewRecruitments() {
    return this.http.get<Recruitments[]>(API_SEARCH_NAME_ALL + '/sort')
  }
}

