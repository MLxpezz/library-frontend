import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FadeDirective } from '../../../components/directives/fade/fade.directive';
import { HistoryService } from '../../../core/services/historyService/history-service.service';
import { LoanHistory } from '../../../interfaces/loanHistory';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { UserService } from '../../../core/services/userService/user-service.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    RouterLink,
    FadeDirective,
    AsyncPipe,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {
  canEditInfo: boolean = false;
  buttonDisabled: boolean = true;
  textButton: string = 'Editar mi informacion';

  private loanHistoryService: HistoryService = inject(HistoryService);
  private userService: UserService = inject(UserService);

  email!: string;
  auxEmail!: string;
  loansArray: LoanHistory[] = [];

  accountForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  loanDate!: Date | null;

  ngOnInit(): void {
    this.userService.getInfoAccount().subscribe({
      next: (data) => {
        this.email = data.email;
        this.auxEmail = data.email;

        this.accountForm.patchValue({
          email: this.email,
        });
      },
    });

    this.accountForm.controls['email'].disable();
    this.fillArray();
  }

  fillArray() {
    this.loanHistoryService.getHistoryLoans().subscribe({
      next: (loansHistory) => {
        this.loansArray = loansHistory.map((loan) => loan);
      },
    });
  }

  searchLoanDate() {
    if(this.loanDate) {
      return this.loansArray.filter(loan => loan.startLoanDate === this.loanDate);
    }
    return this.loansArray;
  }

  clearLoansDate() {
    this.loanDate = null;
  }

  onSubmit() {
    console.log('hola');
    console.log(this.accountForm.value);
  }

  clearForm() {
    this.accountForm.reset({
      email: this.auxEmail,
      password: '',
      newPassword: '',
    });
  }

  editInfo() {
    this.canEditInfo = !this.canEditInfo;
    this.buttonDisabled = !this.buttonDisabled;

    if (this.canEditInfo) {
      this.textButton = 'Cancelar';
      this.accountForm.controls['email'].enable();
    } else {
      this.textButton = 'Editar mi informacion';
      this.accountForm.controls['email'].disable();
      this.clearForm();
    }
  }
}
