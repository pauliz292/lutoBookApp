import { apiEndPoint } from '../config.json';
import http from '../services/httpService';

export async function AdminLogin(email, password) {
    return await http.post(apiEndPoint + "api/auth/login", {
        email,
        password
    });
}

export async function Register(user) {
    return await http.post(apiEndPoint + "api/auth/register", {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
        phonenumber: user.phonenumber
    });
}

export default {
    AdminLogin,
    Register
};