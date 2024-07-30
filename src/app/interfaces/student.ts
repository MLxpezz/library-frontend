export interface Student extends NewStudent {
  id: number;
  countLoans: number;
}

export interface NewStudent {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  enrollmentNumber: string;
  address: string;
}
