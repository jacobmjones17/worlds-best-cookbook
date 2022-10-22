import React, { useState } from "react";
import { useParams } from "react-router-dom"

function EditRecipe ({ recipes, onUpdateRecipe }) {
    const params = useParams();
    const parsedParams = parseInt(params.id)

    const recipeToEdit = recipes.find(recipe => {
        return recipe.id === parsedParams
    })
    // recipeToEdit.ingredients[0].name !== "" ? recipeToEdit.ingredients[0].name : "",
    // recipeToEdit.ingredients[1].name !== "" ? recipeToEdit.ingredients[1].name : "",
    // recipeToEdit.ingredients[2].name !== "" ? recipeToEdit.ingredients[2].name : "",
    // recipeToEdit.ingredients[3].name !== "" ? recipeToEdit.ingredients[3].name : "",
    // recipeToEdit.ingredients[4].name !== "" ? recipeToEdit.ingredients[4].name : "",

    console.log(recipeToEdit.name)

    const [formData, setFormData] = useState({
        name: recipeToEdit.name,
        instructions: recipeToEdit.instructions,
        picture: recipeToEdit.picture,
        ingredient1: recipeToEdit.ingredients[0].name,
        ingredient2: recipeToEdit.ingredients[1].name,
        ingredient3: recipeToEdit.ingredients[2].name,
        ingredient4: recipeToEdit.ingredients[3].name,
        ingredient5: recipeToEdit.ingredients[4].name
    });

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleFormSubmit(e) {
        e.preventDefault();
    
        fetch(`http://localhost:9292/recipes/${params.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((updatedRecipe) => {
            onUpdateRecipe(updatedRecipe);
            setFormData({
            name: updatedRecipe.name,
            instructions: updatedRecipe.name,
            picture: updatedRecipe.picture,
            ingredient1: "",
            ingredient2: "",
            ingredient3: "",
            ingredient4: "",
            ingredient5: "",
            })})
            
    }
    
    return (
        <section>
            <div className="recipeform">
            <h1>Edit Recipe</h1>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Instructions:
                    <input
                        type="text"
                        name="instructions"
                        value={formData.instructions}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Picture:
                    <input
                        type="text"
                        name="picture"
                        value={formData.picture}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Ingredient1:
                    <input
                        type="text"
                        name="ingredient1"
                        value={formData.ingredient1}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Ingredient2:
                    <input
                        type="text"
                        name="ingredient2"
                        value={formData.ingredient2}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Ingredient3:
                    <input
                        type="text"
                        name="ingredient3"
                        value={formData.ingredient3}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Ingredient4:
                    <input
                        type="text"
                        name="ingredient4"
                        value={formData.ingredient4}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Ingredient5:
                    <input
                        type="text"
                        name="ingredient5"
                        value={formData.ingredient5}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Confirm Edit</button>
            </form>
            </div>
        </section>
    );
}

export default EditRecipe;
