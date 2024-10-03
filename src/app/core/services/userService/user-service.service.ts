import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Login, LoginResponse } from '../../../interfaces/Login';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Register } from '../../../interfaces/register';
import { accountData, infoAccount, updateAccountData } from '../../../interfaces/account';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _http: HttpClient = inject(HttpClient);

  userLogin(userData: Login): Observable<LoginResponse> {
    return this._http.post<LoginResponse>(environment.loginUrl, userData).pipe(
      map((response) => {
        if (response.isSuccess) {
          localStorage.setItem('token', response.token);
        }
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError (() => new Error(error.message));
      })
    );
  }

  userRegister(userData: Register): Observable<Register> {
    return this._http.post<Register>(environment.registerUrl, userData).pipe(
      map((response) => {
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => new Error(error.message))
      })
    );
  }

  getInfoAccount(): Observable<accountData> {
    return this._http.get<accountData>(environment.getInfoAccount, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token") ?? ""}`
      }
    })
  }

  updateAccount(id: number, accountData: updateAccountData): Observable<LoginResponse> {
    return this._http.put<LoginResponse>(`${environment.updateUserAccount}/${id}`, accountData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token") ?? ""}`
      }
    }).pipe(
      map((response) => {
  
        if (response.isSuccess) {
          localStorage.setItem('token', response.token);
        }
  
        return response;
      })
    );
  }
  
}
