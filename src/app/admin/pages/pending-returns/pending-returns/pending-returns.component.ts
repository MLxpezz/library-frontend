import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoanInfo } from '../../../../interfaces/loan';
import { Observable } from 'rxjs';
import { LoanService } from '../../../../core/services/loanService/loan-service.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-pending-returns',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './pending-returns.component.html',
  styleUrl: './pending-returns.component.css'
})
export class PendingReturnsComponent {

  loanService: LoanService = inject(LoanService);
  loansInfo: Observable<LoanInfo[]> = this.loanService.getInfoLoans();

  updateLoan(loanId: number) {
    console.log(loanId);
    this.showLoans();
  }

  
  showLoans(){
    this.loansInfo.subscribe({
      next: response => response.forEach(loan => console.log(loan)
      )
      
    })
  }
}
