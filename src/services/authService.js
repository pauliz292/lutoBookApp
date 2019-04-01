import { apiEndPoint } from '../config.json';
import http from '../services/httpService';

export async function AdminLogin(email, password) {
    return await http.post(apiEndPoint + "api/auth/login", {
        email,
        password
    });
}

export default {
    AdminLogin,
};