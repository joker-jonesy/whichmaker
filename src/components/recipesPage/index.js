import React from "react";
import {useSelector} from "react-redux";
import {selectRecipes} from "../../reducers/recipes";

function recipesPage(){
    const recipes = useSelector(state=>state.recipes);
    return(
        <div id="recipes">
            {recipes && recipes.length ? recipes.map((recipe)=>
                <div key={recipe.name}>
                    <h1>{recipe.name}</h1>
                    <p>{recipe.description}</p>
                </div>

            ):null}
        </div>
    )
}

export default recipesPage;