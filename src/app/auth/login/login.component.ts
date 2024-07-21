import { AsyncPipe, NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../core/userService/user-service.service';
import { Login } from '../../interfaces/Login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, AsyncPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private userService: UserService = Inject(UserService); 

  imgUrl : string = "assets/Designer.jpeg";

  loginForm: FormGroup = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", Validators.required)
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
      password: this.password.value
    } 

    console.log(userData);
  }
}
