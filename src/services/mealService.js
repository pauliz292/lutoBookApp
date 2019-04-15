import { apiEndPoint } from '../config.json';
import http from '../services/httpService';

const api = apiEndPoint + "api/menus/";
const date = new Date();

export function GetMenuByUser(userId) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;

    let _api = api + year + "/" + month + "/" + userId;

    return http.get(_api);
}

export function UpdatePlanner(userId) {
    let day = date.getDay();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let _api = api + "generate" + "/" + month + "-" + day + "-" + year + "/" + userId;
    http.post(_api);
}