import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { LoanHistory } from '../../../interfaces/loanHistory';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private http: HttpClient = inject(HttpClient);
  private token: string = localStorage.getItem('token') ?? '';

  getHistoryLoans(): Observable<LoanHistory[]> {
    return this.http.get<LoanHistory[]>(environment.getHistory, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    })
  }
}
