import React, { useState } from "react";

function NewRecipe ({ onAddRecipe }) {
    const [formData, setFormData] = useState({
        name: "",
        instructions: "",
        picture: "",
        ingredient1: "",
        ingredient2: "",
        ingredient3: "",
        ingredient4: "",
        ingredient5: "",
    });

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newRecipeInfo = {
            "name": formData.name,
            "instructions": formData.instructions,
            "picture": formData.picture,
            "ingredient1": formData.ingredient1 !== "" ? formData.ingredient1 : null,
            "ingredient2": formData.ingredient2 !== "" ? formData.ingredient2 : null,
            "ingredient3": formData.ingredient3 !== "" ? formData.ingredient3 : null,
            "ingredient4": formData.ingredient4 !== "" ? formData.ingredient4 : null,
            "ingredient5": formData.ingredient5 !== "" ? formData.ingredient5 : null
        }
        fetch("/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newRecipeInfo)
        })
            .then((response) => response.json())
            .then((newRecipe) => {
                onAddRecipe(newRecipe)
                setFormData({
                name: "",
                instructions: "",
                picture: "",
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
            <h1>New Recipe</h1>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Add Recipe</button>
            </form>
            </div>
        </section>
    );
}

export default NewRecipe;
