import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Student } from '../../interfaces/student';
import { StudentService } from '../../core/services/studentService/student.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-table-students',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './table-students.component.html',
  styleUrl: './table-students.component.css',
})
export class TableStudentsComponent {
  @Input() students!: Student[];
  @Output() updateStudents: EventEmitter<void> = new EventEmitter<void>();
  @Output() studentToUpdate: EventEmitter<Student> =
    new EventEmitter<Student>();

  private studentService: StudentService = inject(StudentService);

  deleteStudent(idStudent: number) {
    if (confirm('Estas seguro que quieres eliminar este estudiante?'))
      this.studentService.deleteStudent(idStudent).subscribe({
        next: (response) => {
          console.log(response);
          this.updateStudents.emit();
        },
      });
  }

  updateStudent(student: Student) {
    this.studentToUpdate.emit(student);
  }
}
