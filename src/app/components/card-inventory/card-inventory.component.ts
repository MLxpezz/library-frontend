import { NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Book } from '../../interfaces/book';
import { BookService } from '../../core/services/bookService/book-service.service';

@Component({
  selector: 'app-card-inventory',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './card-inventory.component.html',
  styleUrl: './card-inventory.component.css'
})
export class CardInventoryComponent {

  @Input() book!: Book;
  @Output() bookSelected: EventEmitter<Book> = new EventEmitter<Book>();

  bookService: BookService = inject(BookService);

  deleteBook(idBook: string) {
    if(confirm("¿Seguro que quieres eliminar este libro?"))
    this.bookService.deleteBook(idBook).subscribe({
      next: response => {
        console.log(response);
      }
    })
  }

  bookEmitter(book: Book) {
    this.bookSelected.emit(book);
  }
}
