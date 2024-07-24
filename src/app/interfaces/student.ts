export interface Student {
    id: number;
    name: string;
    lastname: string;
    email: string;
    phone: string;
    enrollmentNumber: string;
    address: string;
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
