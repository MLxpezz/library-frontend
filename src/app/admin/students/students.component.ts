import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StudentService } from '../../core/services/studentService/student.service';
import { Observable } from 'rxjs';
import { Student } from '../../interfaces/student';
import { AsyncPipe } from '@angular/common';
import { ModalComponent } from '../components/modal/modal.component';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [RouterLink, AsyncPipe, ModalComponent],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {

  private studentService: StudentService = inject(StudentService);
  public students$: Observable<Student[]> = this.studentService.getAllStudents();

  showModal: boolean = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

}
