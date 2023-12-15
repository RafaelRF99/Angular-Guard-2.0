import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthMockService {
  tokenFicticio = 'abc123';

  constructor() {}

  handleLogin() {
    localStorage.setItem('token', this.tokenFicticio);
  }

  handleLogout() {
    localStorage.clear();
  }
}
