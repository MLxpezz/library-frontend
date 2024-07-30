import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { alreadyLoggedInGuard } from "../guards/already-logged-in-guard.guard";

export const AUTH_ROUTES: Routes = [
    {
        path: 'login', component: LoginComponent,
        canActivate: [alreadyLoggedInGuard]
    },
    {
        path: "register", component: RegisterComponent,
        canActivate: [alreadyLoggedInGuard]
    }
];