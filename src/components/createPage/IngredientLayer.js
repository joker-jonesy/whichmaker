import React from "react";

function IngredientLayer(props){
    return(
       <div className="ingredient-layer" style={{backgroundColor: props.dt.color}}>
           {props.dt.name}
       </div>
    )
}

export default IngredientLayer