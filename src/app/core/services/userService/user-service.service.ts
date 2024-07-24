import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Login, LoginResponse } from '../../../interfaces/Login';
import { map, Observable } from 'rxjs';
import { Register } from '../../../interfaces/register';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _http: HttpClient = inject(HttpClient);

  userLogin(userData: Login): Observable<LoginResponse> {
    return this._http.post<LoginResponse>(environment.loginUrl, userData).pipe(
      map((response) => {
        if(response.isSuccess) {
          localStorage.setItem("token", response.token);
          localStorage.setItem("expiration", response.expiration);
        }
        return response;
      })
    );
  }

  userRegister(userData: Register): Observable<Register> {
    return this._http.post<Register>(environment.registerUrl, userData).pipe(
      map((response) => {
        if(response) {
          alert("Registro exitoso.");
        }
        return response;
      })
    );
  }
}
