import { Component, inject, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Login } from '../../../interfaces/Login';
import { UserService } from '../../../core/services/userService/user-service.service';
import { Router, RouterLink } from '@angular/router';
import { Register } from '../../../interfaces/register';
import { TransportToDirective } from '../../directives/transportTo/transport-to.directive';


@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, TransportToDirective],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.css',
})
export class AuthFormComponent {
  @Input() submitButtonText!: string;

  userService: UserService = inject(UserService);
  router: Router = inject(Router);

  badCredentials: boolean = false;
  successRegister: boolean = false;
  emailIsAlreadyExists: boolean = false;
  changeInput: boolean = false;
  inputType: string = 'password';
  urlIcon: string = `assets/text-icon.png`;

  isLoginRoute(): boolean {
    return this.router.url === '/login';
  }

  authForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  get email() {
    return this.authForm.controls['email'];
  }

  get password() {
    return this.authForm.controls['password'];
  }

  private login(userData: Login) {
    this.userService.userLogin(userData).subscribe({
      next: (data) => {
        if (data.isSuccess) {
          this.router.navigate(['/dashboard']);
          this.badCredentials = false;
        }
      },
      error: (error) => {
        console.error('Fallo en el inicio de sesion', error);
        this.badCredentials = true;
      },
    });
  }

  private register(userData: Register) {
    this.userService.userRegister(userData).subscribe({
      next: (data) => {
        this.emailIsAlreadyExists = false;
        this.successRegister = true;
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2500);
      },
      error: (error) => {
        console.error('Fallo en el registro', error);
        this.emailIsAlreadyExists = true;
        this.successRegister = false;
      },
    });
  }

  onSubmit() {
    const userData: Login | Register = {
      email: this.email.value,
      password: this.password.value,
    };

    if (this.isLoginRoute()) {
      this.login(userData as Login);
      return;
    }

    this.register(userData as Register);
  }

  changeInputType() {
    this.changeInput = !this.changeInput;
  }
}
