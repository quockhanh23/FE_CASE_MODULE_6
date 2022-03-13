import {EventEmitter, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {UserToken} from "../models/user-token";
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {DialogLogoutComponent} from "../notification/dialog-logout/dialog-logout.component";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<UserToken>;
  public currentUser: Observable<UserToken>;

  constructor(private http: HttpClient,
              public dialog: MatDialog,
              private toarts: ToastrService,
              private router: Router,) {
    // @ts-ignore
    this.currentUserSubject = new BehaviorSubject<UserToken>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserToken {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<any>(API_URL + '/login/user', {email, password})
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        console.log("Kiểu dữ liệu: " + JSON.stringify(user))
        console.log("Kiểu dữ liệu: " + user)
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  loginEnterprise(email: string, password: string) {
    return this.http.post<any>(API_URL + '/login/enterprise', {email, password})
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    // @ts-ignore
    this.currentUserSubject.next(null);
    this.router.navigate(["/login"]).then();
    this.dialog.open(DialogLogoutComponent)
    this.openToartsLogout()
  }

  openToartsLogout() {
    setTimeout(() => {
      this.toarts.info('Đăng nhập để có thể sử dụng các dịch vụ của chúng tôi', 'Chú ý !')
    }, 6000)
  }
}
