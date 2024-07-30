import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../core/services/authService/auth-service.service';
import { inject } from '@angular/core';

export const alreadyLoggedInGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  if (authService.isTokenStorage()) {
    return router.createUrlTree(['/dashboard']);
  }

  return true;
};
