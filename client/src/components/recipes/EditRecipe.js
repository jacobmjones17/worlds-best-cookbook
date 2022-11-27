import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import EditIngredient from "../ingredients/EditIngredient";

function EditRecipe ({ recipes, onUpdateRecipe }) {
    const params = useParams();
    const navigate = useNavigate();

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

    const [recipeIngredientList, setRecipeIngredientList] = useState(recipeIngredients);


    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
            
        });
    };

    const handleIngredientAdd = () => {
        setRecipeIngredientList([...recipeIngredientList, { ingredient: "", measurement: "" }]);
        };

    const handleIngredientChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...recipeIngredientList];
        list[index][name] = value;
        setRecipeIngredientList(list);
    };

    const handleIngredientRemove = (index) => {
        const list = [...recipeIngredientList];
        list.splice(index, 1);
        setRecipeIngredientList(list);
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
                        required
                    />
                </label>
                <label>
                    Instructions:
                    <input
                        type="text"
                        name="instructions"
                        value={formData.instructions}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Picture:
                    <input
                        type="text"
                        name="picture"
                        value={formData.picture}
                        onChange={handleChange}
                        required
                    />
                </label>
                <EditIngredient handleIngredientAdd={handleIngredientAdd} recipeIngredientList={recipeIngredientList} handleIngredientChange={handleIngredientChange} handleIngredientRemove={handleIngredientRemove} />
                <button type="submit" onClick={() => navigate("/recipes")}>Confirm Edit</button>
            </form>
            </div>
        </section>
    );
}

export default EditRecipe;
