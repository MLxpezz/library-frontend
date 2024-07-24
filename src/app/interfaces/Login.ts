export interface Login {
    email: string;
    password: string;
}

export interface LoginResponse {
    message: string;
    token: string;
    isSuccess: boolean;
    expiration: string;
}