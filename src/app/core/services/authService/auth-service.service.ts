import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, Subject, tap } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http: HttpClient = inject(HttpClient);
  private router: Router = inject(Router);

  isValidToken(): Observable<boolean> {
    if (!this.isTokenStorage()) {
      return of(false);
    }

    return this.http
      .get<boolean>(environment.validateToken, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }

  isTokenStorage() {
    const token: string = localStorage.getItem('token') ?? '';

    if (token !== '' && token.length > 10) {
      return true;
    }

    return false;
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate(["/"]);
  }
}
