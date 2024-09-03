import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatOption,
} from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { Observable, startWith, map } from 'rxjs';
import { BookService } from '../../../core/services/bookService/book-service.service';
import { AsyncPipe, NgClass, NgForOf, NgOptimizedImage } from '@angular/common';
import { StudentService } from '../../../core/services/studentService/student.service';
import { Student } from '../../../interfaces/student';
import { Book } from '../../../interfaces/book';
import { LoanService } from '../../../core/services/loanService/loan-service.service';
import { LoanPost } from '../../../interfaces/loan';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-loans',
  standalone: true,
  imports: [
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatOption,
    NgForOf,
    NgClass, 
    NgOptimizedImage
  ],
  templateUrl: './modal-loans.component.html',
  styleUrl: './modal-loans.component.css',
})
export class ModalLoansComponent {
  @Input() showModal!: boolean;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  bookService: BookService = inject(BookService);
  studentService: StudentService = inject(StudentService);
  loanService: LoanService = inject(LoanService);
  router: Router = inject(Router);

  studentHasMaximunLoans: boolean = false;

  loansForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    student: new FormControl('', Validators.required),
  });

  books: Book[] = [];
  students: Student[] = [];

  studentSelected!: Student;
  bookSelected!: Book;

  filteredBooks!: Observable<Book[]>;
  filteredStudents!: Observable<Student[]>;

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe((students) => {
      this.students = students.map((student) => student);
    });

    this.bookService.getBooks().subscribe((books) => {
      this.books = books.filter((book) => book.quantity > 0);
    });

    this.filteredBooks = this.loansForm.controls['title'].valueChanges.pipe(
      startWith(''),
      map((book) => (book ? this._filter(book) : this.books.slice()))
    );

    this.filteredStudents = this.loansForm.controls[
      'student'
    ].valueChanges.pipe(
      startWith(''),
      map((student) =>
        student ? this._filterStudents(student) : this.students.slice()
      )
    );
  }

  private _filter(value: string): Book[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : '';
    return this.books.filter((book) =>
      book.title.toLowerCase().startsWith(filterValue)
    );
  }

  private _filterStudents(value: string | Student): Student[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : '';
    return this.students.filter((student) =>
      student.name.toLowerCase().startsWith(filterValue)
    );
  }

  onStudentSelected(event: any): void {
    this.studentSelected = event.option.value;
    this.loansForm.controls['student'].setValue(`${this.studentSelected.name} ${this.studentSelected.lastname}`, { emitEvent: false });
  }

  onBookSelected(event: any): void {
    this.bookSelected = event.option.value;
    this.loansForm.controls['title'].setValue(`${this.bookSelected.title}`, { emitEvent: false });
  }

  hideModal() {
    this.showModal = false;
    this.clearForm();
    this.closeModal.emit();
    this.studentHasMaximunLoans = false;
  }

  clearForm() {
    this.loansForm.reset({
      title: '',
      student: ''
    })
  }

  onSubmit() {
    const dataLoan: LoanPost = {
      studentId: this.studentSelected.id,
      bookId: this.bookSelected.id
    }

    this.loanService.createLoan(dataLoan).subscribe({
      next: response => {
        this.clearForm();
        this.router.navigate(["/dashboard/pending-returns"]);
        this.studentHasMaximunLoans = false;
      },
      error: error => {
        this.studentHasMaximunLoans = true;
      }
    });
  }
}
