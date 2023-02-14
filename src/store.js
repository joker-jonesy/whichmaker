import {configureStore} from "@reduxjs/toolkit";
import usersSlice from "./reducers/users"
import recipesSlice from "./reducers/recipes"
import ingredientsSlice from "./reducers/ingredients"
import singleUserSlice from "./reducers/singleUser";
import singleRecipeSlice from "./reducers/singleRecipe";
import singleIngredientSlice from "./reducers/singleIngredient";

const store = configureStore({
    reducer:{
        users: usersSlice,
        recipes:recipesSlice,
        singleRecipe:singleRecipeSlice,
        singleUser:singleUserSlice,
        ingredients:ingredientsSlice,
        singleIngredient:singleIngredientSlice
    }
})

export default store;