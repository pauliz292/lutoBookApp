import { apiEndPoint } from '../config.json';
import http from '../services/httpService';
import * as ingredientsService from '../services/ingredients';
import * as locationsService from '../services/locations';

const api = apiEndPoint + "api/recipes/";

export function GetRecipes() {
    return http.get(api);
}

export function SearchRecipe(searchQuery) {
    
}

export function GetRecipesByMealType(type) {
    return http.get(api);
}

export function GetRecipesByCategory(name) {
    
}

export function AddRecipe(recipe) {
    return http.post(api, {
        name: recipe.name,
        description: recipe.description,
        instruction: recipe.instruction,
        tutorialurl: recipe.tutorialUrl,
        catergoryid: recipe.catergoryId,
        mealtypeid: recipe.mealtypeId
    });
}

export function UpdateRecipe(id) {
    
}

export function DeleteRecipe(id) {
    
}