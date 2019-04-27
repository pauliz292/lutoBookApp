import http from '../services/httpService';

const api = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
const radius = "&radius=" + 50;
const keyword = "&keyword=market&";
const key = "key=AIzaSyAryGhLxQeNVF9eGAxDdNEf23UKbXLb1Hk";

export function locateMarkets(latitude, longitude) {
    let location = "location=" + latitude + "," + longitude;
    let _api = api + location + radius + keyword + key;
    return http.get(_api);
}