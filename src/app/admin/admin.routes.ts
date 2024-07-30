import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from '../guards/auth.guard';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { StudentsComponent } from './pages/students/students.component';

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
    ],
  },
];
