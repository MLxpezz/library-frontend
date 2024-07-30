import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthFormComponent } from '../../components/authForm/auth-form/auth-form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AsyncPipe, NgOptimizedImage, RouterLink, AuthFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  imgUrl: string = 'assets/Designer.jpeg';
}
