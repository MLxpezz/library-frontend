import { Component } from '@angular/core';
import { CardComponent } from '../components/card/card.component';
import { InventoryComponent } from '../inventory/inventory.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent, InventoryComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  searchButton: string = "assets/icons8-search-book-48 1.png";

  listCardsInfo: Array<any> = [
    {
      areaName: "Inventario",
      imgUrl: "assets/inventory.png",
      pageUrl: ""
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
      pageUrl: ""
    },
    {
      areaName: "Administrativos",
      imgUrl: "assets/teacher.png",
      pageUrl: ""
    }
  ];

}
