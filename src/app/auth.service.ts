import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor() {}

  login(username: string, password: string): void {
    window.localStorage.setItem('username', username);
    window.localStorage.setItem('password', password);
    console.log(window.localStorage.getItem('username'));
    console.log(window.localStorage.getItem('password'));
  }

  logout(): void {
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('password');
  }

  isAuthenticated(): boolean {
    return window.localStorage.getItem('username') ? true : false;
  }

  getUserInfo(): any {
    let userData;
    userData.username = window.localStorage.getItem('username');
    userData.password = window.localStorage.getItem('password');

    return userData;
  }
}
