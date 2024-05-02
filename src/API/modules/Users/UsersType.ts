export interface User {
    idTTTM?: number;
    eQN?: string;
    username?: string;
    password?: string;
    cardNumber?: string;
    cardIssueDate?: Date;
    cardExpiryDate?: Date;
    codeBar?: string;
    checkById?: string;
}; 
export interface UserArray extends Array<User> {}

export interface Roles{
    roleIds: Array<string>
}

