export interface Loan {
    id: number,
    loanDate: Date,
    returnDate: Date,
    studentId: number,
    bookId: string
}

export interface LoanPost {
    studentId: number,
    bookId: string
}

export interface LoanResponse {
    studentName: string,
    bookTitle: string,
    returnDate: Date
}

export interface LoanTemp {
    id: number,
    studentName: string,
    bookTitle: string
}

export interface LoanReturning {
    id: number,
    studentName: string,
    bookTitle: string,
    returnDate: Date,
    amount: number,
    daysAfterReturnDate: number
}