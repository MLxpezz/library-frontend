import { Component, inject, HostListener } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { AuthFormComponent } from '../../components/authForm/auth-form/auth-form.component';
import { FadeDirective } from '../../components/directives/fade/fade.directive';
import { TransportDirective } from '../../components/directives/transport/transport.directive';
import { TransportToDirective } from '../../components/directives/transportTo/transport-to.directive';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NgOptimizedImage, AuthFormComponent, FadeDirective, TransportDirective, TransportToDirective, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  imgUrl: string = 'assets/Designer.jpeg';

  router: Router = inject(Router);

  isLoginRoute(): boolean {
    return this.router.url === '/login';
  }

}
