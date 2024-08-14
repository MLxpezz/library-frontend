import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthFormComponent } from '../../components/authForm/auth-form/auth-form.component';
import { FadeDirective } from '../../components/directives/fade/fade.directive';
import { TransportDirective } from '../../components/directives/transport/transport.directive';
import { TransportToDirective } from '../../components/directives/transportTo/transport-to.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AsyncPipe, NgOptimizedImage, RouterLink, AuthFormComponent, FadeDirective, TransportDirective, TransportToDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  imgUrl: string = 'assets/Designer.jpeg';
}
