export interface Register {
    email: string;
    password: string;
}

export interface RegisterResponse {
    message: string;
    token: string;
}