import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BookService } from '../../../core/services/bookService/book-service.service';
import { Book, BookPost } from '../../../interfaces/book';

@Component({
  selector: 'app-modal-inventory',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal-inventory.component.html',
  styleUrl: './modal-inventory.component.css'
})
export class ModalInventoryComponent {
  @Input() showModal!: boolean;
  @Output() close = new EventEmitter<void>();

  bookService: BookService = inject(BookService);

  hideModal() {
    this.showModal = false;
    this.close.emit();
  }

  bookForm: FormGroup = new FormGroup({
    title: new FormControl("", Validators.required),
    author: new FormControl("", Validators.required),
    isbn: new FormControl("", Validators.required),
    quantity: new FormControl("", [Validators.required, Validators.min(1)]),
  })

  onSubmit() {
    const book: BookPost = {
      title: this.bookForm.controls["title"].value,
      author: this.bookForm.controls["author"].value,
      isbn: this.bookForm.controls["isbn"].value,
      quantity: this.bookForm.controls["quantity"].value,
    }

    this.bookService.createBook(book).subscribe({
      next: response => {
        this.hideModal();
        console.log(response);
      }
    })
    
  }

}
