import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { Loan, LoanPost, LoanResponse } from '../../../interfaces/loan';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

    private http: HttpClient = inject(HttpClient);
    private token: string = localStorage.getItem("token") ?? "";

    getLoans(): Observable<Loan[]> {
      return this.http.get<Loan[]>(environment.getLoans, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      })
    }

    createLoan(data: LoanPost): Observable<LoanResponse> {
      return this.http.post<LoanResponse>(environment.createLoan, data, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      })
    }
}
