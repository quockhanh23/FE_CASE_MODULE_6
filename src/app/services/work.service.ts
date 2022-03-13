import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Work} from "../models/work";

const API_URL = "http://localhost:8080/api/works/listWork";

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Work[]> {
    return this.http.get<Work[]>(API_URL)
  }
}
