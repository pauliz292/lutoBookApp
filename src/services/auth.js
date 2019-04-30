import { AsyncStorage } from "react-native";
import http from "./httpService";
import jwtDecode from "jwt-decode";
import { apiEndPoint as apiUrl } from '../config.json';

const apiEndpoint = apiUrl + "api/auth";
const tokenKey = "token";

http.setJwt(getJwt());

export async function register(user) {
    return await http.post(apiEndpoint + "/register", {
        email: user.email,
        password: user.password,
        firstname: user.firstname,
        lastname: user.lastname,
        phonenumber: user.phonenumber
    });
}

export async function login(email, password) {
    const { data: jwt } = await http.post(apiEndpoint + "/login", {
        email,
        password
    });

    AsyncStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
    AsyncStorage.setItem(tokenKey, jwt);
}

export function logout() {
    AsyncStorage.removeItem(tokenKey);
}

export async function getCurrentUser() {
    try {
        const jwt = await AsyncStorage.getItem(tokenKey);
        const user = jwtDecode(jwt);

        return user;
    } catch (ex) {
        return null;
    }
}

export function getJwt() {
    return AsyncStorage.getItem(tokenKey);
}

export const isSignedIn = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(tokenKey)
            .then(res => {
                if (res !== null) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
            .catch(err => reject(err));
    });
};

export default {
    register,
    login,
    loginWithJwt,
    logout,
    getCurrentUser,
    getJwt,
    isSignedIn
};