import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "", redirectTo: "/login", pathMatch: 'full'
    },
    {
        path: "",  loadChildren: () => import("./auth/auth.route").then(routes => routes.AUTH_ROUTES)
    },
    {
        path: "dashboard", loadChildren: () => import("./admin/admin.routes").then(routes => routes.ADMIN_ROUTES)
    }
];
