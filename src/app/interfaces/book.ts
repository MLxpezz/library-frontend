export interface Book extends BookPost{
    id: string,
}

export interface BookPost {
    title: string,
    author: string,
    isbn: string,
    quantity: number
}
