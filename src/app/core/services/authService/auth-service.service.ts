import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isTokenExpired(): boolean {
    const expirationFromLocal: string = localStorage.getItem('expiration') ?? "";

    const expirationDate: Date = new Date(expirationFromLocal);
    const currentDate: Date = new Date();

    if (expirationFromLocal == "" || currentDate > expirationDate) {
      return true;
    }
    
    return false;
  }

  isTokenStorage() {
    const token: string = localStorage.getItem('token') ?? "";

    if (token !== '' && token.length > 10) {
      return true;
    }

    return false;
  }
}
