import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { StudentsComponent } from './students/students.component';
import { authGuard } from '../guards/auth.guard';

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
