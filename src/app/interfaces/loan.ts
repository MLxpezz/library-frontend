export interface LoanPost {
    studentId: number,
    bookId: string
}

export interface LoanResponse {
    idLoan: number,
    studentName: string,
    bookTitle: string,
    returningDate: Date
}

export interface LoanInfo extends LoanResponse{
    penaltyAmount: number,
    daysAfterReturningDate: number
}