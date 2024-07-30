export interface Book extends BookPost{
    id: number,
}

export interface BookPost {
    title: string,
    author: string,
    isbn: string,
    quantity: number
}
