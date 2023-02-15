import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchSingleRecipe, selectSingleRecipe} from "../../reducers/singleRecipe";

function recipePage(){
    const dispatch =useDispatch();
    const params = useParams()
    const { id } = useParams();


    const singleRecipe = useSelector(selectSingleRecipe)
    const recipe =singleRecipe.info;
    const ingredients =singleRecipe.info.ingredients;


    React.useEffect(() => {
        dispatch(fetchSingleRecipe(id));
    }, [dispatch, params]);


    return(
        <>
            <div id="recipePage">
                <h1>{recipe.name?recipe.name:""}</h1>
                <p>{recipe.description?recipe.description:""}</p>
                <div>
                    {ingredients && ingredients.length? ingredients.map((ingredient)=>
                        <div key={ingredient.id}>
                            <h1 style={{color:ingredient.color}}>{ingredient.name}</h1>
                        </div>

                    ):null}
                </div>
            </div>
        </>
    )
}

export default recipePage;