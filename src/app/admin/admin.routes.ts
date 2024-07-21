import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { InventoryComponent } from "./inventory/inventory.component";
import { StudentsComponent } from "./students/students.component";

export const ADMIN_ROUTES: Routes = [
    {
        path: "", component: DashboardComponent
    },
    {
        path: "inventory", component: InventoryComponent
    },
    {
        path: "students", component: StudentsComponent
    }
];