import { apiEndPoint } from '../config.json';
import http from '../services/httpService';

const api = apiEndPoint + "api/menus/";

export async function GetMenuByUser(userId, date) {
    let year = date.getFullYear();
    let day = date.getDate();
    let month = date.getMonth() + 1;

    let _api = api + "/" + month + "-" + day + "-" + year + "/" + userId;

    return await http.get(_api);
}

export async function UpdatePlanner(userId, date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();

    let _api = api + "generate" + "/" + month + "-" + day + "-" + year + "/" + userId;
    console.log(_api);

    return await http.post(_api);
}