import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {first, switchMap} from 'rxjs/operators';
import { AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FbService {

    uri = 'http://localhost:4000/users';
    isAuthenticated = false;

    constructor(private http: HttpClient) { }

  isAuth() {
    return this.isAuthenticated;
  }

  setAuth(isAuth){
    this.isAuthenticated = isAuth;
  }

  signin(obj) {
    return this.http.post(`${this.uri}/signin`, obj);
  }

  signup(obj) {
    return this.http.post(`${this.uri}/signup`, obj);
  }

}



