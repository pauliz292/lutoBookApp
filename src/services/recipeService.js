import { apiEndPoint } from '../config.json';
import http from '../services/httpService';

const api = apiEndPoint + "api/recipes/";

export function GetRecipes() {
    return http.get(api);
}

export function SearchRecipe(searchQuery) {
    
}

export function GetRecipesByMealType(type) {
    
}

export function GetRecipesByCategory(name) {
    
}

export function AddRecipe(id) {
    
}

export function UpdateRecipe(id) {
    
}

export function DeleteRecipe(id) {
    
}