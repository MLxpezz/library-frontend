import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const ServerUnavailableInterceptor: HttpInterceptorFn = (req, next) => {

  const router: Router = inject(Router);

  return next(req).pipe(catchError((error: HttpErrorResponse) => {
    if(error.status === 0 || error.status === 503) {
      router.navigate(["/service-down"]);
    }
    return throwError(() => new Error(error.message));
  }));
  
};
