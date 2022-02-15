import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {FileCV} from "../models/file-cv";

const API_URL = "http://localhost:8080/api/cvs";
const API_URL_EDIT = "http://localhost:8080/api/cvs/editCV";
const API_URL_CREATE = "http://localhost:8080/api/cvs/createCV";
const API_URL_FIND_BY_USER = "http://localhost:8080/api/cvs/findCVByUserId";

@Injectable({
  providedIn: 'root'
})
export class FileCVService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<FileCV[]> {
    return this.http.get<FileCV[]>(API_URL)
  }

  findByUser(id: any): Observable<FileCV[]> {
    return this.http.get<FileCV[]>(API_URL_FIND_BY_USER + `?idUser=${id}`)
  }

  getById(id: any): Observable<FileCV> {
    return this.http.get<FileCV>(API_URL + `/${id}`)
  }

  create(fileCV: FileCV, id: any): Observable<FileCV> {
    return this.http.post<FileCV>(API_URL_CREATE + `?idUser=${id}`, fileCV)
  }

  update(id: any, fileCV: FileCV): Observable<FileCV> {
    return this.http.put<FileCV>(API_URL_EDIT + `/${id}`, fileCV)
  }

  delete(id: any): Observable<FileCV> {
    return this.http.delete<FileCV>(API_URL + `/${id}`)
  }
}
