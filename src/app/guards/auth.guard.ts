import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../core/services/authService/auth-service.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  
  return authService.isValidToken().pipe(
    map(isValid => {
      if(isValid ) {
        return true;
      }
      localStorage.removeItem("token");
      return router.createUrlTree(["/login"]);
    })
  )
};
