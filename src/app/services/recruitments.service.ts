import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Recruitments} from "../models/recruitments";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class RecruitmentsService {

  constructor(private http: HttpClient) {
  }

  // @ts-ignore
  listRecruitmentsAll(): Observable<Recruitments[]> {
  return  this.http.get<Recruitments[]>(API_URL+'/api/recruitments')
  }
}

