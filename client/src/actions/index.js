import axios from 'axios';

export function getAllRecipes() {
    return async function(dispatch) {
        var json = await axios("http://localhost:3002/recipes");
        return dispatch({
            type: 'GET_ALL_RECIPES',
            payload: json.data,
        })
    };
}

export function getDiets() {
    return async function(dispatch) {
        var json = await axios.get("http://localhost:3002/diets");
        return dispatch({
            type: 'GET_DIETS',
            payload: json.data,
        })
    };
}


export function getRecipeByName(name) {
    return async function(dispatch) {
        try {
            if (name.length === 0) return alert("need to write a recipe")
            const response = await axios.get(`/recipes?name=${name}`);
            return dispatch({
                type: "GET_RECIPE_BY_NAME",
                payload: response.data
            });
        } catch (error) {
            if (error.response) {
                alert("recipe not found")
            }
        }

    };
}


export function getRecipeById(id) {
    return async function(dispatch) {
        try {
            const recipeById = await axios.get(`/recipes/${id}`);
            return dispatch({
                type: "GET_RECIPE_BY_ID",
                payload: recipeById.data
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export function deleteRecipe(id) {
    return async function(dispatch) {
        try {
            const remove = await axios.delete(`/recipes/${id}`);
            return dispatch({
                type: "DELETE_RECIPE",
                payload: remove.data
            })
        } catch (error) {
            console.log(error);
        }
    };
}

export function getOrderedRecipes(payload) {
    return {
        type: "GET_ORDERED_RECIPES",
        payload
    };
}
export function getAllDiets(payload) {
    return {
        type: "GET_ALL_DIETS",
        payload
    };
}

export function getHealthScore(payload) {
    return {
        type: "GET_HEALTHSCORE",
        payload
    };
}

export function postRecipe(data) {
    return async function(dispatch) {
        const postRecipe = await axios.post("/recipes", data);
        return postRecipe;
    };
}


export function recipeDetail(payload) {
    console.log(payload);
    return {
        type: "RECIPE_DETAIL",
        payload: {}
    };
}