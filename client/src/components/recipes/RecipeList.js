import React from "react";
import Recipe from "./Recipe";
import { useNavigate } from "react-router-dom"
import "./Recipe.css";

function RecipeList({ recipes, onDeleteRecipe}) {

    const navigate = useNavigate()

    function handleDeleteClick(recipeCard) {
        fetch(`http://localhost:9292/recipes/${recipeCard.id}`, {
            method: "DELETE",
        });
        onDeleteRecipe(recipeCard.id)
    }

    const mappedRecipes = recipes.map(recipeCard => {
        return (
        <div className="individual-card" key={recipeCard.id}>
        <Recipe 
        recipeCard={recipeCard}
        />
        <button className="remove" onClick={() => handleDeleteClick(recipeCard)}>DELETE</button>
        <button className="edit" onClick={() => navigate(`/recipes/${recipeCard.id}/edit`)}>EDIT</button>
        </div>
        )
    })


    return (
        <div className="card-grid">
            {mappedRecipes}
        </div>
    )
}

export default RecipeList