import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoanReturning } from '../../../../interfaces/loan';
import { forkJoin } from 'rxjs';
import { BookService } from '../../../../core/services/bookService/book-service.service';
import { LoanService } from '../../../../core/services/loanService/loan-service.service';
import { StudentService } from '../../../../core/services/studentService/student.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-pending-returns',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './pending-returns.component.html',
  styleUrl: './pending-returns.component.css'
})
export class PendingReturnsComponent {

  loanService: LoanService = inject(LoanService);
  bookService: BookService = inject(BookService);
  studentService: StudentService = inject(StudentService);

  loansByStudentAndBooks: LoanReturning[] = [];

  ngOnInit(): void {
    this.loanService.getLoans().subscribe({
      next: (loans) => {
        loans.forEach((loan) => {
          forkJoin({
            student: this.studentService.getStudentById(loan.studentId),
            book: this.bookService.getBookById(loan.bookId),
          }).subscribe({
            next: ({ student, book }) => {
              let loanTemp: LoanReturning = {
                id: loan.id,
                studentName: `${student.name} ${student.lastname}`,
                bookTitle: book.title,
                returnDate: loan.returnDate,
                amount: loan.returnDate > new Date() ? 0 : 0,
                daysAfterReturnDate: loan.returnDate > new Date() ? 0 : 0
              };

              this.loansByStudentAndBooks.push(loanTemp);
            },
          });
        });
      },
    });
  }

  updateLoan(loanId: number) {
    console.log(loanId);
  }
}
