import React from "react";
import { useNavigate } from "react-router-dom"
import RecipeList from "./recipes/RecipeList";
import "./Home.css"

function Home( { recipes, onDeleteRecipe, onAddRecipe } ) {
    const navigate = useNavigate()


    return (
        <div className="description">
            <p>Store all your favorite recipes here!</p>
            <button type={"submit"} onClick={() => navigate("/recipes/create")}>Add Recipe</button>
            <div className="recipe-container">
                <RecipeList 
                recipes={recipes} 
                onDeleteRecipe={onDeleteRecipe}
                onAddRecipe={onAddRecipe}
                />
            </div>
        </div>
    )
}

export default Home