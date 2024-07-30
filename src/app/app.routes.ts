import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { alreadyLoggedInGuard } from './guards/already-logged-in-guard.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('./auth/auth.route').then((routes) => routes.AUTH_ROUTES), canActivate: [alreadyLoggedInGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./admin/admin.routes').then((routes) => routes.ADMIN_ROUTES), canActivate: [authGuard], canMatch: [authGuard]
  },
  {
    path: 'service-down',
    loadComponent: () => import('./admin/pages/error-page/error-page.component'),
  },
];
