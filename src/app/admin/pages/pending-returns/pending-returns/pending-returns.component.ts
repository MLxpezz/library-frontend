import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoanInfo } from '../../../../interfaces/loan';
import { Observable } from 'rxjs';
import { LoanService } from '../../../../core/services/loanService/loan-service.service';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalPendingReturnsComponent } from '../../../../components/modal-pending-returns/modal-pending-returns.component';
import { FadeDirective } from '../../../../components/directives/fade/fade.directive';

@Component({
  selector: 'app-pending-returns',
  standalone: true,
  imports: [RouterLink, AsyncPipe, FormsModule, ModalPendingReturnsComponent, FadeDirective],
  templateUrl: './pending-returns.component.html',
  styleUrl: './pending-returns.component.css',
})
export class PendingReturnsComponent {
  loanService: LoanService = inject(LoanService);
  loansInfo: Observable<LoanInfo[]> = this.loanService.getInfoLoans();

  studentName: string = '';
  loansInfoList!: LoanInfo[];
  showModal: boolean = true;
  loanInfo!: LoanInfo;

  ngOnInit(): void {
    this.loadLoans();
  }

  loadLoans() {
    this.loanService.getInfoLoans().subscribe({
      next: (loans) => {
        this.loansInfoList = loans.map((loan) => loan);
      },
    });
  }

  filterLoansByStudentName() {
    if (this.studentName === '') {
      return this.loansInfoList;
    }
    return this.loansInfoList.filter((loan) =>
      loan.studentName.toLowerCase().startsWith(this.studentName.toLowerCase())
    );
  }

  openModal(loan: LoanInfo) {
    this.showModal = true;
    this.loanInfo = loan;
  }

  closeModal() {
    this.showModal = false;
  }
}
