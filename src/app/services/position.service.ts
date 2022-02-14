import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {StatusRecruitment} from "../models/status-recruitment";
import {Position} from "../models/position";

const API_URL = "http://localhost:8080/api/works/listPosition";

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Position[]> {
    return this.http.get<Position[]>(API_URL)
  }
}
