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
const API_URL_LOCK = 'http://localhost:8080/api/admins/changeLockRecruitment'

@Injectable({
  providedIn: 'root'
})
export class RecruitmentsService {

  constructor(private http: HttpClient) {
  }

  listRecruitmentsAll(): Observable<Recruitments[]> {
    return this.http.get<Recruitments[]>(API_URL + '/api/recruitments/listRec')
  }

  findById(id: String): Observable<Recruitments> {
    return this.http.get<Recruitments>(API_URL + '/api/recruitments' + `/${id}`)
  }

  register(recruitment: Recruitments, idEnterprise: any): Observable<Recruitments> {
    return this.http.post<Recruitments>(API_URL + '/api/recruitments/create' + `?idEnterprise=${idEnterprise}`, recruitment);
  }

  editRecruitment(recruitment: Recruitments, idRecruitment: any): Observable<Recruitments> {
    return this.http.put<Recruitments>(API_URL + '/api/recruitments/edit' + `?idRecruitment=${idRecruitment}`, recruitment);
  }

  searchByName(name: string, index: number): Observable<Recruitments[]> {
    return this.http.get<Recruitments[]>(API_SEARCH_NAME_ALL + `/name/${name}?page=` + index)
  }

  searchByName2(name: string): Observable<Recruitments[]> {
    return this.http.get<Recruitments[]>(API_SEARCH_NAME_ALL + `/name2/?q=${name}`)
  }

  listRecruitmentsAllOrderByDate(): Observable<Recruitments[]> {
    return this.http.get<Recruitments[]>(API_URL + '/api/recruitments/sort')
  }

  listRecruitmentsVIPOrderByDate(): Observable<Recruitments[]> {
    return this.http.get<Recruitments[]>(API_URL + '/api/recruitments/topVIP')
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

  changeStatusLock(id: any): Observable<ProfileEnterprise> {
    return this.http.delete<ProfileEnterprise>(API_URL_LOCK + `/${id}`)
  }

  sortByNewRecruitments() {
    return this.http.get<Recruitments[]>(API_SEARCH_NAME_ALL + '/sortNewJob')
  }

  sortByOldRecruitments() {
    return this.http.get<Recruitments[]>(API_SEARCH_NAME_ALL + '/sortOddJob')
  }

  findRecruitmentLikeId(id: string) {
    return this.http.get<Recruitments[]>(API_SEARCH_NAME_ALL + '/findRecruitmentLikeId' + `/${id}`)
  }

  searchByAddress(q: string): Observable<Recruitments[]> {
    return this.http.get<Recruitments[]>(API_SEARCH_NAME_ALL + `/address/?q=${q}`)
  }

  getAllRecruitment(index: number): Observable<Recruitments[]> {
    return this.http.get<Recruitments[]>(API_SEARCH_NAME_ALL + `/paging/?page=` + index)
  }

  getAll1(): Observable<Recruitments[]> {
    return this.http.get<Recruitments[]>(API_SEARCH_NAME_ALL + '/listRec')
  }

  searchRecruitment(address: string, title: string, experience: string, min: number, max: number, name: string,): Observable<Recruitments[]> {
    return this.http.get<Recruitments[]>(API_SEARCH_NAME_ALL + `/findRecruitment/?address=${address}&title=${title}&experience=${experience}&min=${min}&max=${max}&name=${name}`)
  }
}
