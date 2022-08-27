// const initialState = {
//     recipes: [],
//     allRecipes: [],
//     recibeById: {},
//     diets: [],
//     recipeDetail: {},
//     nameRecipes: [],
// };

// export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
// export const GET_DIETS = "GET_DIETS";
// export const GET_RECIPE_BY_NAME = "GET_RECIPE_BY_NAME";
// export const GET_RECIPE_BY_ID = "GET_RECIPE_BY_ID";
// export const DELETE_RECIPE = "DELETE_RECIPE";
// export const GET_ORDERED_RECIPES = "GET_ORDERED_RECIPES";
// export const GET_ALL_DIETS = "GET_ALL_DIETS";
// export const GET_HEALTHSCORE = "GET_HEALTHSCORE";
// export const POST_RECIPE = "POST_RECIPE";
// export const RECIPE_DETAIL = "RECIPE_DETAIL";


// function rootReducer(state = initialState, action) {
//     switch (action.type) {
//         case GET_ALL_RECIPES:
//             return {
//                 ...state,
//                 recipes: action.payload,
//                 allRecipes: action.payload,
//                 nameRecipes: action.payload
//             };
//         default:
//             return state;

//         case GET_DIETS:
//             let recipeAll = state.recipes;
//             const recipesFiltered = action.payload === "All" ? recipeAll : recipeAll.filter(e => e.diets.includes(action.payload))
//             return {
//                 ...state,
//                 allRecipes: recipesFiltered
//             };

//         case GET_RECIPE_BY_NAME:
//             return {
//                 ...state,
//                 allRecipes: action.payload
//             };

//         case GET_RECIPE_BY_ID:
//             return {
//                 ...state,
//                 recibeById: action.payload
//             };

//         case DELETE_RECIPE:
//             let recipeById = state.allRecipes
//             let deleteRecipe = recipeById.filter(e => e !== action.payload)
//             return {
//                 ...state,
//                 allRecipes: deleteRecipe
//             };

//         case GET_ORDERED_RECIPES:
//             const allRecipes = state.allRecipes
//             const recipeOrder = action.payload === "ascendent" ? allRecipes.sort((a, b) => {
//                 if (a.name > b.name) {
//                     return 1
//                 }
//                 if (a.name < b.name) {
//                     return -1
//                 }
//                 return 0
//             }) : allRecipes.sort((a, b) => {
//                 if (a.name < b.name) {
//                     return 1
//                 }
//                 if (a.name > b.name) {
//                     return -1
//                 }
//                 return 0
//             })
//             return {
//                 ...state,
//                 allRecipes: recipeOrder
//             };

//         case GET_ALL_DIETS:
//             return {
//                 ...state,
//                 recipeById: action.payload
//             };

//         case GET_HEALTHSCORE:
//             const allRecipe = state.allRecipes;
//             const recipeHealthScore = action.payload === "healthScoreHight" ? allRecipe.sort((a, b) => {
//                 if (a.healthScore > b.healthScore) {
//                     return 1
//                 }
//                 if (a.healthScore < b.healthScore) {
//                     return -1
//                 }
//                 return 0
//             }) : allRecipe.sort((a, b) => {
//                 if (a.healthScore < b.healthScore) {
//                     return -1
//                 }
//                 return 0
//             })

//             return {
//                 ...state,
//                 allRecipes: recipeHealthScore
//             };

//         case POST_RECIPE:
//             return {
//                 ...state,
//             }

//         case RECIPE_DETAIL:
//             return {
//                 ...state,
//                 recipeById: action.payload
//             }
//     }
// }

// export default rootReducer;