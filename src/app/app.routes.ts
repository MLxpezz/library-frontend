import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('./auth/auth.route').then((routes) => routes.AUTH_ROUTES),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./admin/admin.routes').then((routes) => routes.ADMIN_ROUTES), canActivate: [authGuard]
  },
  {
    path: 'service-down',
    loadComponent: () => import('./admin/error-page/error-page.component'),
  },
];
