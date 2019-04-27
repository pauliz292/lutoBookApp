import { apiEndPoint } from '../config.json';
import http from '../services/httpService';

const api = apiEndPoint + "api/recipes/";

export function GetRecipes() {
    return http.get(api);
}

export function SearchRecipe() {
    
}

export function GetRecipesByMealType(type) {
    return http.get(api + "meal-type/" + type);
}

export function GetRecipesByCategory() {
    
}

export function AddRecipe(recipe) {
    console.log(recipe);
    return http.post(api, {
        name: recipe.name,
        description: recipe.description,
        instruction: recipe.instruction,
        tutorialurl: recipe.tutorialUrl,
        categoryid: recipe.categoryId,
        mealtypeid: recipe.mealtypeId,
        image: recipe.image,
        ingredients: recipe.ingredients,
        servingsize: recipe.serving
    });
}

export function DeleteRecipe(recipeId) {
    return http.post(api + "toggle/" + recipeId);
}