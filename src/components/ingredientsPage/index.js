import React from "react";
import {useSelector} from "react-redux";
import {selectIngredients} from "../../reducers/ingredients";

function ingredientsPage(){
    const ingredients = useSelector(state=>state.ingredients)
    return(
        <div id="ingredients">
            {ingredients && ingredients.length? ingredients.map((ingredient)=>
                <div key={ingredient.id}>
                    <h1 style={{color:ingredient.color}}>{ingredient.name}</h1>
                </div>

            ):null}
        </div>
    )
}

export default ingredientsPage;