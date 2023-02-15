import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchSingleIngredient, selectSingleIngredient} from "../../reducers/singleIngredient";


function ingredientPage(){

    const dispatch =useDispatch();
    const params = useParams()
    const { id } = useParams();


    const singleIngredient = useSelector(selectSingleIngredient)
    const ingredient =singleIngredient.info;


    React.useEffect(() => {
        dispatch(fetchSingleIngredient(id));
    }, [dispatch, params]);

    return(
        <>
            <div id="ingredientPage">
                <h1 style={{color:ingredient.color}}>{ingredient.name}</h1>
            </div>
        </>
    )
}

export default ingredientPage;