import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../core/services/authService/auth-service.service';


export const authGuard: CanActivateFn = (route, state) => {
  
  const authService: AuthService = inject(AuthService);

  if(!authService.isTokenStorage() || authService.isTokenExpired()) {
    const router = inject(Router);
    const url = router.createUrlTree(["/login"]);

    return url;
  }

  return true;
};
