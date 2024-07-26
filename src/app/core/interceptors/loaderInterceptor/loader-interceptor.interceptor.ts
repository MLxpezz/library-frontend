import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoaderService } from '../../services/loaderService/loader.service';
import { finalize } from 'rxjs';

export const loaderInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const loaderService: LoaderService = inject(LoaderService);
  loaderService.show();
  return next(req).pipe(
    finalize(() => loaderService.hide())
  );
};
