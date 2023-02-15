import React from "react";
import {Link} from "react-router-dom";

function Nav(){
    return(
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/create/1"}>Create Recipe</Link>
            <Link to={"/ingredients"}>Ingredients</Link>
            <Link to={"/recipes"}>Recipes</Link>
            <Link to={"/ingredient/1"}>Tomato</Link>
            <Link to={"/user/1"}>Luke</Link>
            <Link to={"/user/2"}>Lucas</Link>
            <Link to={"/recipe/1"}>Blt</Link>
        </nav>
    )
}

export default Nav;