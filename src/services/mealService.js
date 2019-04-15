import { apiEndPoint } from '../config.json';
import http from '../services/httpService';

const api = apiEndPoint + "api/menus/";

export function GetMenuByUser(userId) {
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;

    let _api = api + year + "/" + month + "/" + userId;

    return http.get(_api);
}