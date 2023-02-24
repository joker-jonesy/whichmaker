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

    React.useEffect(() => {
        dispatch(fetchSingleRecipe(id));
    }, [dispatch, params]);

    const [ing,setIng]= React.useState([])


    const singleRecipe = useSelector(selectSingleRecipe)
    const allIngredients = useSelector(state=>state.ingredients)
    const recipe =singleRecipe.info;
    const ingredients =singleRecipe.info.ingredients;


    return(
        <>

            <h1>{recipe.name}</h1>
            <textarea id={"description"} value={recipe.description}/>

            <div id="createBlock">

                <div id="recipeGrid">
                    {ingredients&&ingredients.length ? ingredients.map((ing)=>
                        <IngredientLayer dt={ing} key={ing.key}/>
                    ):null}
                </div>
                <div id="ingredientsGrid">
                    {allIngredients && allIngredients.length ? allIngredients.map((ing)=>
                        <IngredientBlock dt={ing} key={ing.key}/>
                    ):null}
                </div>
            </div>

        </>
    )
}

export default createPage;