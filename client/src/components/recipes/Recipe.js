import React, { useState } from "react";


function Recipe({ recipeCard }) {
    const [flip, setFlip] = useState(false);

    const ingredient = recipeCard.measurement_and_name.map((ingredient) => {
        return (<li>{ingredient.name}</li>)
    })

    const measurement = recipeCard.measurement_and_name.map((ingredient) => {
        return <li>{ingredient.measurement}</li>
    })


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
            <h2>Ingredients: {ingredient} </h2>
            <h2>Measurement: {measurement} </h2>
            <h3>Instructions: {recipeCard.instructions} </h3>
            </div>
        </div>
    )
}



export default Recipe;