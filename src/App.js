import React from "react";
import Nav from "./components/navigation/Nav";
import Footer from "./components/navigation/Footer";
import homePage from './components/homePage';
import recipePage from './components/recipePage';
import recipesPage from './components/recipesPage';
import userPage from './components/userPage';
import ingredientPage from './components/ingredientPage';
import ingredientsPage from './components/ingredientsPage';
import createPage from './components/createPage';
import {Routes, Route} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchRecipesAsync} from "./reducers/recipes";
import {fetchIngredientsAsync} from "./reducers/ingredients";
import {fetchUsersAsync} from "./reducers/users";

function App() {

  const dispatch = useDispatch();

  React.useEffect(()=>{
    dispatch(fetchRecipesAsync);
    dispatch(fetchIngredientsAsync);
    dispatch(fetchUsersAsync);
  }, [dispatch])

  return (
    <>
      <Nav/>
      <div className="wrapper">
        <Routes>
          <Route index path={"/"} element={homePage()}/>
          <Route index path={"/create:/:id"} element={createPage()}/>
          <Route path={"/recipes"} element={recipesPage()}/>
          <Route path={"/recipe/:id"} element={recipePage()}/>
          <Route path={"user/:id"} element={userPage()}/>
          <Route path={"/ingredients"} element={ingredientsPage()}/>
          <Route path={"/ingredient/:id"} element={ingredientPage()}/>
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
