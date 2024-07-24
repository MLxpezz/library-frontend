import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewStudent, Student } from '../../../interfaces/student';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private http: HttpClient = inject(HttpClient);
  private token: string = localStorage.getItem("token")?? "";

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(environment.getStudents, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
    });
  }

  createStudent(student: NewStudent): Observable<NewStudent> {
    return this.http.post<Student>(environment.createStudent, student, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
    });
  }
}
