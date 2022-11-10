import React, { useState, useEffect } from "react";
import NavBar from "./components/navbar/NavBar";
import LoginSignupContainer from "./components/LoginSignupContainer/LoginSignupContainer";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import NewRecipe from "./components/recipes/NewRecipe";
import EditRecipe from "./components/recipes/EditRecipe";
import './App.css';

const App = () => {
    const [recipes, setRecipes] = useState([]);
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    const loginUser = (currentUser) => {
        setUser(currentUser);
        setLoggedIn(true)
    };

    const logoutUser = () => {
        setUser({});
        setLoggedIn(false);
    };
    
    
    useEffect(() => {
        fetch("/me")
        .then((response) => {;
            response.json().then((user) => loginUser(user))
        })

        fetch("/recipes")
        .then((response) => response.json())
        .then((recipes) => setRecipes(recipes))
    }, []);

    function handleDeleteRecipe(id) {
        const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
        setRecipes(updatedRecipes)
    }

    function handleUpdateRecipe(updatedRecipe) {
        const updatedRecipes = recipes.map((recipe) => {
            if (recipe.id === updatedRecipe.id) {
                return updatedRecipe
            } else {
                return recipe
            }
        });
        setRecipes(updatedRecipes)
    }


    function handleAddRecipe(newRecipe) {
        setRecipes([...recipes, newRecipe]);
    }



return (
    <div className="App">
    <NavBar />
    <Routes>
    <Route path="/recipes/:id/edit" element={<EditRecipe recipes={recipes} onUpdateRecipe={handleUpdateRecipe}/>} />
    <Route path="/recipes/create" element={< NewRecipe onAddRecipe={handleAddRecipe} />} />
    <Route path="/recipes" element={<Home
    loggedIn={loggedIn}
    recipes={recipes}
    onDeleteRecipe={handleDeleteRecipe}
    onAddRecipe={handleAddRecipe}
    />} />
    <Route path="/" element={<LoginSignupContainer onLogin={loginUser} onLogout={logoutUser} user={user}/>} />
    </Routes>
    </div>
)

}

export default App;
