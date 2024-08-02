import { Component, inject } from '@angular/core';
import { CardComponent } from '../../../components/card/card.component';
import { InventoryComponent } from '../inventory/inventory.component';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../core/services/authService/auth-service.service';
import { LoaderComponent } from '../../../components/loader/loader.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent, InventoryComponent, LoaderComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  private router: Router = inject(Router);
  private authService: AuthService = inject(AuthService);

  hideCards() {
    const noCardsRoutes = ["/dashboard"]
    return noCardsRoutes.includes(this.router.url);
  }

  logout() {
    this.authService.logout();
  }

  listCardsInfo: Array<any> = [
    {
      areaName: "Inventario",
      imgUrl: "assets/inventory.png",
      pageUrl: "/dashboard/inventory"
    },
    {
      areaName: "Alumnos",
      imgUrl: "/assets/student.png",
      pageUrl: "/dashboard/students"
    },
    {
      areaName: "Devoluciones pendientes",
      imgUrl: "assets/book.png",
      pageUrl: ""
    },
    {
      areaName: "Prestamos",
      imgUrl: "assets/inventory.png",
      pageUrl: "/dashboard/loans"
    },
    {
      areaName: "Administrativos",
      imgUrl: "assets/teacher.png",
      pageUrl: ""
    }
  ];

}
