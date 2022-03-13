import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {StatusEnterprise} from "../models/status-enterprise";

const API_URL = 'http://localhost:8080/api/admins/findAllStatusEnterprise';
const API_URL2 = 'http://localhost:8080/api/admins/findOneStatusEnterprise';

@Injectable({
  providedIn: 'root'
})
export class StatusEnterpriseService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<StatusEnterprise[]> {
    return this.httpClient.get<StatusEnterprise[]>(API_URL)
  }

  getById(id: any): Observable<StatusEnterprise> {
    return this.httpClient.get<StatusEnterprise>(API_URL2 + `/${id}`)
  }
}
