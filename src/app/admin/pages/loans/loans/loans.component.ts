import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModalLoansComponent } from '../../../../components/modalLoans/modal-loans/modal-loans.component';
import { LoanService } from '../../../../core/services/loanService/loan-service.service';
import { forkJoin } from 'rxjs';
import { LoanTemp } from '../../../../interfaces/loan';
import { AsyncPipe } from '@angular/common';
import { BookService } from '../../../../core/services/bookService/book-service.service';
import { StudentService } from '../../../../core/services/studentService/student.service';

@Component({
  selector: 'app-loans',
  standalone: true,
  imports: [RouterLink, ModalLoansComponent, AsyncPipe],
  templateUrl: './loans.component.html',
  styleUrl: './loans.component.css',
})
export class LoansComponent {
  loanService: LoanService = inject(LoanService);
  bookService: BookService = inject(BookService);
  studentService: StudentService = inject(StudentService);

  searchButton: string = 'assets/icons8-search-book-48 1.png';
  showModal: boolean = false;

  loansByStudentAndBooks: LoanTemp[] = [];

  ngOnInit(): void {
    this.loanService.getLoans().subscribe({
      next: (loans) => {
        loans.forEach((loan) => {
          forkJoin({
            student: this.studentService.getStudentById(loan.studentId),
            book: this.bookService.getBookById(loan.bookId),
          }).subscribe({
            next: ({ student, book }) => {
              let loanTemp: LoanTemp = {
                id: loan.id,
                studentName: `${student.name} ${student.lastname}`,
                bookTitle: book.title,
              };

              this.loansByStudentAndBooks.push(loanTemp);
            },
          });
        });
      },
    });
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
