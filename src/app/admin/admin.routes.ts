import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from '../guards/auth.guard';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { StudentsComponent } from './pages/students/students.component';
import { LoansComponent } from './pages/loans/loans/loans.component';
import { PendingReturnsComponent } from './pages/pending-returns/pending-returns/pending-returns.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'inventory',
        component: InventoryComponent,
        canActivate: [authGuard]
      },
      {
        path: 'students',
        component: StudentsComponent,
        canActivate: [authGuard]
      },
      {
        path: 'loans',
        component: LoansComponent,
        canActivate: [authGuard]
      },
      {
        path: 'pending-returns',
        component: PendingReturnsComponent,
        canActivate: [authGuard]
      },
    ],
  },
];
