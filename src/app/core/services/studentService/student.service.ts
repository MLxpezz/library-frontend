import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { NewStudent, Student } from '../../../interfaces/student';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private http: HttpClient = inject(HttpClient);
  private token: string = localStorage.getItem('token') ?? '';

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(environment.getStudents, {
      headers: {
        Authorization: `Bearer ${this.token}`,
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    }).pipe(
      map(student => {
        return student;
      })
    );
  }

  createStudent(student: NewStudent): Observable<NewStudent> {
    return this.http.post<Student>(environment.createStudent, student, {
      headers: {
        Authorization: `Bearer ${this.token}`,
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    });
  }

  deleteStudent(idStudent: number): Observable<any> {
    return this.http.delete<any>(
      `${environment.deleteStudent}${idStudent}`,
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
          'Content-type': 'application/json',
        },
      }
    ).pipe(
      map(response => {
        return response;
      })
    );
  }

  updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(`${environment.updateStudent}${student.id}`, student,  {
      headers: {
        Authorization: `Bearer ${this.token}`,
        'Content-type': 'application/json',
      },
    }).pipe(
      map(response => {
        return response;
      })
    );
  }
}
