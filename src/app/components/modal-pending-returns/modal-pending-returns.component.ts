import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
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
  newDate!: Date;

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if(changes['loanInfo'] && changes['loanInfo'].currentValue) {
      this.newDate = new Date(this.loanInfo.returningDate)
      this.newDate.setDate(this.newDate.getDate() + 7)
    }
  }

  hideModal() {
    this.showModal = false;
    this.closeModal.emit();
  }

  returnLoan() {
    if (confirm('Confirme la devolucion del libro'))
      this.loanService.returnLoan(this.loanInfo.idLoan).subscribe({
        next: (response) => {
          console.log(response);
          this.hideModal();
        },
      });
  }

  extendReturnDate() {
    if (
      confirm(
        `Confirma que la fecha de devolucion sera ${
          this.newDate.toISOString().split('T')[0]
        }`
      )
    )
      this.loanService
        .extendReturngDate(this.loanInfo.idLoan, this.loanInfo)
        .subscribe({
          next: (response) => {
            console.log(response);
            this.hideModal()
          },
        });
  }
}
