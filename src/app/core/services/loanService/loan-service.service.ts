import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { LoanInfo, LoanPost, LoanResponse } from '../../../interfaces/loan';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  private http: HttpClient = inject(HttpClient);
  private token: string = localStorage.getItem('token') ?? '';

  getLoans(): Observable<LoanResponse[]> {
    return this.http.get<LoanResponse[]>(environment.getLoans, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  getInfoLoans(): Observable<LoanInfo[]> {
    return this.http.get<LoanInfo[]>(environment.getInfoLoans, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  createLoan(data: LoanPost): Observable<LoanResponse> {
    return this.http.post<LoanResponse>(environment.createLoan, data, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  returnLoan(idLoan: number) {
    return this.http.delete<string>(`${environment.returnLoan}${idLoan}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  extendReturngDate(idLoan: number, loan: LoanInfo): Observable<LoanResponse> {
    return this.http.put<LoanResponse>(`${environment.updateLoan}${idLoan}`, loan, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }
}
