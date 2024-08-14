import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { ModalComponent } from '../../../components/modal/modal.component';
import { StudentService } from '../../../core/services/studentService/student.service';
import { Student } from '../../../interfaces/student';
import { FormsModule } from '@angular/forms';
import { TableStudentsComponent } from '../../../components/tableStudents/table-students.component';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe,
    ModalComponent,
    NgOptimizedImage,
    FormsModule,
    TableStudentsComponent,
  ],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent {
  private studentService: StudentService = inject(StudentService);
  public students!: Student[];

  studentNameText = '';

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.studentService.getAllStudents().subscribe({
      next: (students) => {
        this.students = students.map((student) => student);
      },
    });
  }

  filterStudentsByName() {
    if (this.studentNameText === '') {
      return this.students;
    }
    return this.students.filter((student) => {
      let fullname = `${student.name} ${student.lastname}`;
      return fullname.toLowerCase().startsWith(this.studentNameText);
    });
  }

  showModal: boolean = false;
  student!: Student | null;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.student = null;
    this.showModal = false;
  }

  updateStudent(student: any) {
    this.student = student;
    this.openModal();
  }
}
