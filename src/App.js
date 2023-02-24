import React from "react";
import Nav from "./components/navigation/Nav";
import Footer from "./components/navigation/Footer";
import HomePage from './components/homePage';
import RecipePage from './components/recipePage';
import RecipesPage from './components/recipesPage';
import UserPage from './components/userPage';
import IngredientPage from './components/ingredientPage';
import IngredientsPage from './components/ingredientsPage';
import CreatePage from './components/createPage';
import {Routes, Route} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchRecipesAsync} from "./reducers/recipes";
import {fetchIngredientsAsync} from "./reducers/ingredients";
import {fetchUsersAsync} from "./reducers/users";

function App() {

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchRecipesAsync());
        dispatch(fetchUsersAsync());
        dispatch(fetchIngredientsAsync());
    }, [dispatch])

    return (
        <>
            <Nav/>
            <div className="wrapper">
                <div id={"page"}>
                    <Routes>
                        <Route index path={"/"} element={<HomePage/>}/>
                        <Route path={"/create/:id"} element={<CreatePage/>}/>
                        <Route path={"/recipes"} element={<RecipesPage/>}/>
                        <Route path={"/recipe/:id"} element={<RecipePage/>}/>
                        <Route path={"/user/:id"} element={<UserPage/>}/>
                        <Route path={"/ingredients"} element={<IngredientsPage/>}/>
                        <Route path={"/ingredient/:id"} element={<IngredientPage/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default App;
