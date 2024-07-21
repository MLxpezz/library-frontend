import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  listStudents: Array<any> = [
    {
      id: 1,
      name: "Mauricio Lopez Dominguez",
      enrollment: "9898989898",
      phone: "224343012",
      address: "Un pueblillo por ahi en el horizonte",
      pendingReturns: 3,
      debt: 3.50
    },
    {
      id: 1,
      name: "Mauricio Lopez Dominguez",
      enrollment: "9898989898",
      phone: "224343012",
      address: "Un pueblillo por ahi en el horizonte",
      pendingReturns: 3,
      debt: 3.50
    },
    {
      id: 1,
      name: "Mauricio Lopez Dominguez",
      enrollment: "9898989898",
      phone: "224343012",
      address: "Un pueblillo por ahi en el horizonte",
      pendingReturns: 3,
      debt: 3.50
    },
    {
      id: 1,
      name: "Mauricio Lopez Dominguez",
      enrollment: "9898989898",
      phone: "224343012",
      address: "Un pueblillo por ahi en el horizonte",
      pendingReturns: 3,
      debt: 3.50
    },
    {
      id: 1,
      name: "Mauricio Lopez Dominguez",
      enrollment: "9898989898",
      phone: "224343012",
      address: "Un pueblillo por ahi en el horizonte",
      pendingReturns: 3,
      debt: 3.50
    },
    {
      id: 1,
      name: "Mauricio Lopez Dominguez",
      enrollment: "9898989898",
      phone: "224343012",
      address: "Un pueblillo por ahi en el horizonte",
      pendingReturns: 3,
      debt: 3.50
    }
  ];
}
