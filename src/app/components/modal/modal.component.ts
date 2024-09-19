import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { StudentService } from '../../core/services/studentService/student.service';
import { NewStudent, Student } from '../../interfaces/student';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Input() showModal!: boolean;
  @Output() close = new EventEmitter<void>();
  @Output() updateStudents: EventEmitter<void> = new EventEmitter<void>();
  @Input() student!: Student | null;

  errorMessage!: string;

  studentService: StudentService = inject(StudentService);

  ngOnChanges(changes: SimpleChanges) {
    if (changes['student'] && changes['student'].currentValue) {
      this.studentForm.patchValue({
        name: this.student ? this.student.name : '',
        lastname: this.student ? this.student.lastname : '',
        email: this.student ? this.student.email : '',
        phone: this.student ? this.student.phone : '',
        enrollmentNumber: this.student ? this.student.enrollmentNumber : '',
        address: this.student ? this.student.address : '',
      });
    }
  }

  studentForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    enrollmentNumber: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });

  hideModal() {
    this.clearFormAndStudent();
    this.showModal = false;
    this.close.emit();
  }

  clearFormAndStudent() {
    this.studentForm.reset({
      name: '',
      lastname: '',
      email: '',
      phone: '',
      enrollmentNumber: '',
      address: '',
    });
  }

  onSubmit() {
    const studentBase: NewStudent = {
      name: this.studentForm.controls['name'].value,
      lastname: this.studentForm.controls['lastname'].value,
      email: this.studentForm.controls['email'].value,
      phone: this.studentForm.controls['phone'].value,
      enrollmentNumber: this.studentForm.controls['enrollmentNumber'].value,
      address: this.studentForm.controls['address'].value,
    };

    if (this.student) {
      this.updateStudent({
        ...studentBase,
        id: this.student.id,
        countLoans: this.student.countLoans,
      });
    } else {
      this.createStudent(studentBase);
    }
  }

  createStudent(student: NewStudent) {
    this.studentService.createStudent(student).subscribe({
      next: (data) => {
        this.clearFormAndStudent();
        this.hideModal();
        this.updateStudents.emit();
      },
      error: error => {
        this.errorMessage = error.mensaje.toString();
      }
    });
  }

  updateStudent(student: Student) {
    this.studentService.updateStudent(student).subscribe({
      next: (response) => {
        this.clearFormAndStudent();
        this.hideModal();
        this.updateStudents.emit();
      },
    });
  }
}
