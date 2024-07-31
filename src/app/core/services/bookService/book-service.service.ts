import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { Book, BookPost } from '../../../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private http: HttpClient = inject(HttpClient);
  private token: string = localStorage.getItem("token") ?? "";

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(environment.getBooks, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }).pipe(
      map(response => {
        return response;
      })
    )
  }

  createBook(book: BookPost): Observable<Book> {
    return this.http.post<Book>(environment.createBook, book, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }).pipe(
      map(response => {
        return response;
      })
    )
  }

  deleteBook(idBook: string) {
    return this.http.delete<any>(`${environment.deleteBook}${idBook}`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }).pipe(
      map(response => {
        return response;
      })
    )
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${environment.updateBook}${book.id}`, book, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }).pipe(
      map(response => {
        return response;
      })
    )
  }
}
