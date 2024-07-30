import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardInventoryComponent } from '../../../components/card-inventory/card-inventory.component';
import { BookService } from '../../../core/services/bookService/book-service.service';
import { Observable } from 'rxjs';
import { Book } from '../../../interfaces/book';
import { AsyncPipe } from '@angular/common';
import { ModalInventoryComponent } from '../../../components/modalInventory/modal-inventory/modal-inventory.component';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CardInventoryComponent, RouterLink, AsyncPipe, ModalInventoryComponent],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {

  private bookService: BookService = inject(BookService);
  books$: Observable<Book[]> = this.bookService.getBooks();

  searchButton: string = "assets/icons8-search-book-48 1.png";
  showModal: boolean = false;

  openModal() {
    this.showModal = true;
  }

  close() {
    this.showModal = false;
  }
  
}
