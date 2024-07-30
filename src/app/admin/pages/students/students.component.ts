import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { ModalComponent } from '../../../components/modal/modal.component';
import { StudentService } from '../../../core/services/studentService/student.service';
import { Student } from '../../../interfaces/student';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [RouterLink, AsyncPipe, ModalComponent, NgOptimizedImage],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent {
  private studentService: StudentService = inject(StudentService);
  public students$: Observable<Student[]> =
    this.studentService.getAllStudents();

  showModal: boolean = false;
  student!: Student | null;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.student = null;
    this.showModal = false;
  }

  deleteStudent(idStudent: number) {
    if(confirm("Estas seguro que quieres eliminar este estudiante?"))
    this.studentService.deleteStudent(idStudent).subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }

  updateStudent(student: Student) {
    this.student = student;
    this.openModal();
  }
}
