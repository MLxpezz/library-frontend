import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
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
  styleUrl: './modal-inventory.component.css',
})
export class ModalInventoryComponent {
  @Input() showModal!: boolean;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  @Input() book!: Book | null;

  bookService: BookService = inject(BookService);

  hideModal() {
    this.showModal = false;
    this.clearForm();
    this.close.emit();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['book'] && changes['book'].currentValue) {
      this.bookForm.patchValue({
        title: this.book ? this.book.title : '',
        author: this.book ? this.book.author : '',
        isbn: this.book ? this.book.isbn : '',
        quantity: this.book ? this.book.quantity : '',
      });
    }
  }

  bookForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    isbn: new FormControl('', Validators.required),
    quantity: new FormControl('', [Validators.required, Validators.min(1)]),
  });

  clearForm() {
    this.bookForm.reset({
      title: '',
      author: '',
      isbn: '',
      quantity: '',
    });
  }

  createBook(book: BookPost) {
    this.bookService.createBook(book).subscribe({
      next: (response) => {
        this.hideModal();
        this.clearForm();
        console.log(response);
      },
    });
  }

  updateBook(book: Book) {
    this.bookService.updateBook(book).subscribe({
      next: response => {
        this.hideModal();
        this.clearForm();
        console.log(response);
      }
    })
  }

  onSubmit() {
    const book: BookPost = {
      title: this.bookForm.controls['title'].value,
      author: this.bookForm.controls['author'].value,
      isbn: this.bookForm.controls['isbn'].value,
      quantity: this.bookForm.controls['quantity'].value,
    };

    if(this.book) {
      this.updateBook({...book, id: this.book.id});
    } else {
      this.createBook(book);
    }
  }
}
