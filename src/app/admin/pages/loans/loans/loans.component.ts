import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModalLoansComponent } from '../../../../components/modalLoans/modal-loans/modal-loans.component';
import { LoanService } from '../../../../core/services/loanService/loan-service.service';
import { Observable } from 'rxjs';
import { Loan } from '../../../../interfaces/loan';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-loans',
  standalone: true,
  imports: [RouterLink, ModalLoansComponent, AsyncPipe],
  templateUrl: './loans.component.html',
  styleUrl: './loans.component.css'
})
export class LoansComponent {

  loanService: LoanService = inject(LoanService);
  loans$: Observable<Loan[]> = this.loanService.getLoans();

  searchButton: string = "assets/icons8-search-book-48 1.png";
  showModal: boolean = true;
  

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
