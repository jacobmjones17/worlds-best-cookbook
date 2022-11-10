import React, { useState } from "react";


function Recipe({ recipeCard }) {
    const [flip, setFlip] = useState(false);

    const mapRecipeCard = recipeCard.recipe_ingredients.map((recipe_ingredient) => {
        return (<li>{recipe_ingredient.measurement}</li>)
    })

    console.log(recipeCard)
    return (
        <div 
        className = {`card ${flip ? 'flip' : ''}`}
        onClick={() => setFlip(!flip)}
        >
            <div className="front"> 
                <div className="container">
                    <img src={recipeCard.picture} alt=""></img>
                </div> {recipeCard.name} </div>
            <div className="back">
            <h2>Ingredients: {mapRecipeCard} </h2>
            <h3>Instructions: {recipeCard.instructions} </h3>
            </div>
        </div>
    )
}



export default Recipe;