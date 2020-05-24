export interface User {
    id: string;
    username: string;
    password: string;
}

const users: Array<User> = [
    {
        id: "1",
        username: "Brad123",
        password: "brad123"
    },

    {
        id: "2",
        username: "mkl",
        password: "mkl123!"
    }
] 

export default users;