import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardInventoryComponent } from '../../../components/card-inventory/card-inventory.component';
import { BookService } from '../../../core/services/bookService/book-service.service';
import { Book } from '../../../interfaces/book';
import { AsyncPipe } from '@angular/common';
import { ModalInventoryComponent } from '../../../components/modalInventory/modal-inventory/modal-inventory.component';
import { FormsModule } from '@angular/forms';
import { FadeDirective } from '../../../components/directives/fade/fade.directive';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [
    CardInventoryComponent,
    RouterLink,
    AsyncPipe,
    ModalInventoryComponent,
    FormsModule,
    FadeDirective
  ],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css',
})
export class InventoryComponent {
  private bookService: BookService = inject(BookService);
  books!: Book[];

  bookToUpdate!: Book | null;

  bookTitleText = '';
  searchButton: string = 'assets/icons8-search-book-48 1.png';
  showModal: boolean = false;

  ngOnInit(): void {
    this.loadBooks();
  }

  filteredBooks() {
    if (this.bookTitleText === '') {
      return this.books;
    }
    return this.books.filter((book) => {
      return book.title.toLowerCase().startsWith(this.bookTitleText);
    });
  }

  loadBooks() {
    this.bookService.getBooks().subscribe({
      next: (books) => {
        this.books = books.map((book) => book);
      },
    });
  }

  openModal() {
    this.showModal = true;
  }

  close() {
    this.showModal = false;
    this.bookToUpdate = null;
  }

  receptEmitter(event$: Book) {
    this.bookToUpdate = event$;
    this.openModal();
  }
}
