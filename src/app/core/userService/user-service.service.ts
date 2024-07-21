import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Login } from '../../interfaces/Login';
import { Observable } from 'rxjs';
import { Register, RegisterResponse } from '../../interfaces/register';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _http: HttpClient = inject(HttpClient);

  userLogin(userData: Login): Observable<Login> {
    return this._http.post<Login>(environment.loginUrl, userData);
  }

  userRegister(userData: Register): Observable<RegisterResponse> {
    return this._http.post<RegisterResponse>(environment.registerUrl, userData);
  }
}
