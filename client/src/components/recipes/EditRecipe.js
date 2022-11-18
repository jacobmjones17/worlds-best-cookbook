import React, { useState } from "react";
import { useParams } from "react-router-dom"
import EditIngredient from "../ingredients/EditIngredient";

function EditRecipe ({ recipes, onUpdateRecipe }) {
    const params = useParams();

    const parsedParams = parseInt(params.id)

    const recipeToEdit = recipes.find(recipe => {
        return recipe.id === parsedParams
    })

    const recipeIngredients = recipeToEdit.measurement_and_name.map(recipeIngredient => {
        return recipeIngredient
    })


    const [formData, setFormData] = useState({
        name: recipeToEdit.name,
        instructions: recipeToEdit.instructions,
        picture: recipeToEdit.picture,
    });

    const [recipeIngredientList, setIngredientList] = useState(recipeIngredients);


    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
            
        });
    };

    const handleIngredientUpdate = (updatedRecipeIngredient) => {
        const updatedIngredients = recipeIngredientList.map((recipeIngredient) => {
            if (recipeIngredient.id === updatedRecipeIngredient.id) {
                return updatedRecipeIngredient
            } else {
                return recipeIngredient
            }
        })
        setIngredientList(updatedIngredients)
        };

    const handleIngredientChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...recipeIngredientList];
        list[index][name] = value;
        setIngredientList(list);
    };

    const handleIngredientRemove = (index) => {
        const list = [...recipeIngredientList];
        list.splice(index, 1);
        setIngredientList(list);
        };
            

    function handleFormSubmit(e) {
        e.preventDefault();
        const updatedObject = {...formData, recipe_ingredients_attributes: [...recipeIngredientList]}
        fetch(`/recipes/${params.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedObject),
        })
        .then((response) => response.json())
        .then((updatedRecipe) => onUpdateRecipe(updatedRecipe))
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
                <EditIngredient handleIngredientUpdate={handleIngredientUpdate} recipeIngredientList={recipeIngredientList} handleIngredientChange={handleIngredientChange} handleIngredientRemove={handleIngredientRemove} />
                <button type="submit">Confirm Edit</button>
            </form>
            </div>
        </section>
    );
}

export default EditRecipe;
