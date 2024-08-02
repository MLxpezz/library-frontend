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