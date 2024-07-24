import { NgIf, NgStyle } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { StudentService } from '../../../core/services/studentService/student.service';
import { NewStudent } from '../../../interfaces/student';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgStyle, ReactiveFormsModule, NgIf],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Input() showModal!: boolean;
  @Output() close = new EventEmitter<void>();

  studentService: StudentService = inject(StudentService);

  studentForm: FormGroup = new FormGroup({
    name: new FormControl("", Validators.required),
    lastname: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    phone: new FormControl("", [Validators.required]),
    enrollmentNumber: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required)
  });

  hideModal() {
    this.showModal = false;
    this.close.emit();
  }

  createStudent() {
    const student: NewStudent = {
      name: this.studentForm.controls["name"].value,
      lastname: this.studentForm.controls["lastname"].value,
      email: this.studentForm.controls["email"].value,
      phone: this.studentForm.controls["phone"].value,
      enrollmentNumber: this.studentForm.controls["enrollmentNumber"].value,
      address: this.studentForm.controls["address"].value
    }

    this.studentService.createStudent(student).subscribe({
      next: data => {
        console.log(data);
        this.hideModal();
        window.location.reload();
      }
    });
  }
}
