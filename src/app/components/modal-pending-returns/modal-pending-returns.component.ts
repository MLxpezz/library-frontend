import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { LoanInfo } from '../../interfaces/loan';
import { LoanService } from '../../core/services/loanService/loan-service.service';

@Component({
  selector: 'app-modal-pending-returns',
  standalone: true,
  imports: [],
  templateUrl: './modal-pending-returns.component.html',
  styleUrl: './modal-pending-returns.component.css',
})
export class ModalPendingReturnsComponent {
  @Input() showModal!: boolean;
  @Input() loanInfo!: LoanInfo;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  loanService: LoanService = inject(LoanService);

  hideModal() {
    this.showModal = false;
    this.closeModal.emit();
  }

  returnLoan() {
    if(confirm("Confirme la devolucion del libro"))
    this.loanService.returnLoan(this.loanInfo.idLoan).subscribe({
      next: (response) => {
        console.log(response);
        this.hideModal()
      },
    });
  }
}
