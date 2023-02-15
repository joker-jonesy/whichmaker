import React from "react";

function IngredientBlock(props){
    return(
        <div className="ingredient-block" style={{backgroundColor: props.dt.color}}>
            {props.dt.name}
        </div>
    )
}

export default IngredientBlock