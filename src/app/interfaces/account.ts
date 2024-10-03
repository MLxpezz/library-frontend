export interface infoAccount {
    email: string,
}

export interface accountData extends infoAccount{
    id: number
}

export interface updateAccountData extends infoAccount{
    password: string,
    newPassword: string
}