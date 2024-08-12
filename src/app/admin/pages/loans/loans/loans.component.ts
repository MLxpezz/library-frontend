import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModalLoansComponent } from '../../../../components/modalLoans/modal-loans/modal-loans.component';
import { LoanService } from '../../../../core/services/loanService/loan-service.service';
import { Observable } from 'rxjs';
import { LoanResponse } from '../../../../interfaces/loan';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { CardLoansComponent } from '../../../../components/card-loans/card-loans.component';

@Component({
  selector: 'app-loans',
  standalone: true,
  imports: [RouterLink, ModalLoansComponent, AsyncPipe, NgOptimizedImage, CardLoansComponent],
  templateUrl: './loans.component.html',
  styleUrl: './loans.component.css',
})
export class LoansComponent {
  
  loanService: LoanService = inject(LoanService);
  loansByStudentAndBooks: Observable<LoanResponse[]> = this.loanService.getLoans();

  searchButton: string = 'assets/icons8-search-book-48 1.png';
  showModal: boolean = false;


  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
