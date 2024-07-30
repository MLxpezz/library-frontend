import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { AuthFormComponent } from '../../components/authForm/auth-form/auth-form.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NgOptimizedImage, AuthFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  imgUrl: string = 'assets/Designer.jpeg';

}
