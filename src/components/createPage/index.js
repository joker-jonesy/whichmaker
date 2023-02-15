import React from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchSingleRecipe, selectSingleRecipe} from "../../reducers/singleRecipe";
import IngredientLayer from "./IngredientLayer";
import IngredientBlock from "./IngredientBlock";

function createPage(){

    const dispatch =useDispatch();
    const params = useParams()
    const { id } = useParams();


    const singleRecipe = useSelector(selectSingleRecipe)
    const allIngredients = useSelector(state=>state.ingredients)
    const recipe =singleRecipe.info;
    const ingredients =singleRecipe.info.ingredients;


    React.useEffect(() => {
        dispatch(fetchSingleRecipe(id));
    }, [dispatch, params]);


    return(
        <>
            <h1>{recipe.name}</h1>
            <div className="createBlock">
                <div className="recipeGrid">
                    {ingredients&&ingredients.length ? ingredients.map((ing)=>
                        <IngredientLayer dt={ing} key={ing.key}/>
                    ):null}
                </div>
                <div className="ingredientsGrid">
                    {allIngredients && allIngredients.length ? allIngredients.map((ing)=>
                        <IngredientBlock dt={ing} key={ing.key}/>
                    ):null}
                </div>
            </div>

        </>
    )
}

export default createPage;