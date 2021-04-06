import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public isAuthenticated(): boolean {
    const token = sessionStorage.getItem('token');
    return token ? true : false;
  }

  register(req) {
    return this.http.post('users/signup', req);
  }

  login(req) {
    return this.http.post('users/login', req);
  }

}
