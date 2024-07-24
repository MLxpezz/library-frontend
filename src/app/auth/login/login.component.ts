import { AsyncPipe, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../core/services/userService/user-service.service';
import { Login } from '../../interfaces/Login';
import { Router } from '@angular/router';
import { Register } from '../../interfaces/register';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, AsyncPipe, NgOptimizedImage],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private userService: UserService = inject(UserService);
  private router = inject(Router);
  imgUrl: string = 'assets/Designer.jpeg';

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  get email() {
    return this.loginForm.controls['email'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }

  onSubmit() {
    const userData: Login = {
      email: this.email.value,
      password: this.password.value,
    };

    this.userService.userLogin(userData).subscribe({
      next: data => {
        if(data.isSuccess) {
          this.router.navigate(["/dashboard"]);
        }
      }
    })

    // const userData: Register = {
    //   email: this.email.value,
    //   password: this.password.value,
    // };


    // this.userService.userRegister(userData).subscribe({
    //   next: data => {
    //     console.log(data);
    //   }
    // })
  }
}
