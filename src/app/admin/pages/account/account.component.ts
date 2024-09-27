import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FadeDirective } from '../../../components/directives/fade/fade.directive';
import { HistoryService } from '../../../core/services/historyService/history-service.service';
import { LoanHistory } from '../../../interfaces/loanHistory';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { UserService } from '../../../core/services/userService/user-service.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [RouterLink, FadeDirective, AsyncPipe, ReactiveFormsModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {
  canEditInfo: boolean = false;
  buttonDisabled: boolean = true;
  textButton: string = 'Editar mi informacion';

  private loanHistoryService: HistoryService = inject(HistoryService);
  private userService: UserService = inject(UserService);

  loanHistoryArray: Observable<LoanHistory[]> =
    this.loanHistoryService.getHistoryLoans();
  email!: string;

  accountForm: FormGroup = new FormGroup({
    email: new FormControl(''), // Inicializamos vacía
    password: new FormControl(''),
    newPassword: new FormControl(''),
  });

  ngOnInit(): void {
    // Aquí obtenemos el email
    this.userService.getInfoAccount().subscribe({
      next: (data) => {
        this.email = data.email;
        console.log(this.email);

        // Actualizamos el valor del control 'email' después de obtener los datos
        this.accountForm.patchValue({
          email: this.email,
        });
      },
    });

    this.accountForm.controls["email"].disable();
  }

  editInfo() {
    this.canEditInfo = !this.canEditInfo;
    this.buttonDisabled = !this.buttonDisabled;

    if (this.canEditInfo) {
      this.textButton = 'Cancelar';
      this.accountForm.controls["email"].enable();
    } else {
      this.textButton = 'Editar mi informacion';
      this.accountForm.controls["email"].disable();
    }
  }
}
