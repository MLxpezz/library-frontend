import { Component } from '@angular/core';
import { CardInventoryComponent } from '../components/card-inventory/card-inventory.component';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CardInventoryComponent],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {

  searchButton: string = "assets/icons8-search-book-48 1.png";

  listCardsInfo: Array<any> = [
    {
      title: "Alicia en el pais de la maravillas",
      author: "Lewis Carrol",
      loans: 3,
      stock: 2
    },
    {
      title: "Alicia en el pais de la maravillas",
      author: "Lewis Carrol",
      loans: 3,
      stock: 2
    },
    {
      title: "Alicia en el pais de la maravillas",
      author: "Lewis Carrol",
      loans: 3,
      stock: 2
    },
    {
      title: "Alicia en el pais de la maravillas",
      author: "Lewis Carrol",
      loans: 3,
      stock: 2
    },
    {
      title: "Alicia en el pais de la maravillas",
      author: "Lewis Carrol",
      loans: 3,
      stock: 2
    }
  ];
}
