import React, { useState } from "react";
import { useParams } from "react-router-dom"
import EditIngredient from "../ingredients/EditIngredient";

function EditRecipe ({ recipes, onUpdateRecipe }) {
    const params = useParams();

    const parsedParams = parseInt(params.id)
    
    const recipeToEdit = recipes.find(recipe => {
        return recipe.id === parsedParams
    })

    const ingredients = recipeToEdit.measurement_and_name.map(ingredient => {
        return ingredient
    })


    const [formData, setFormData] = useState({
        name: recipeToEdit.name,
        instructions: recipeToEdit.instructions,
        picture: recipeToEdit.picture,
    });

    const [ingredientList, setIngredientList] = useState(ingredients);

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
            
        });
    };

    const handleIngredientUpdate = () => {
        setIngredientList([...ingredientList, { ingredient: "", measurement: "" }]);
        };

    const handleIngredientChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...ingredientList];
        list[index][name] = value;
        setIngredientList(list);
    };

    const handleIngredientRemove = (index) => {
        const list = [...ingredientList];
        list.splice(index, 1);
        setIngredientList(list);
        };
            

    function handleFormSubmit(e) {
        e.preventDefault();
    
        fetch(`/recipes/${params.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData, ingredientList),
        })
        .then((response) => response.json())
            .then((updatedRecipe) => {
                onUpdateRecipe(updatedRecipe)
                setFormData({
                name: "",
                instructions: "",
                picture: "",
            })})
            .then((updatedIngredient) => {
                handleIngredientUpdate(updatedIngredient)
                setIngredientList([{
                    ingredient: "",
                    measurement: ""
                }])
            })
            
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
                <EditIngredient handleIngredientUpdate={handleIngredientUpdate} ingredientList={ingredientList} handleIngredientChange={handleIngredientChange} handleIngredientRemove={handleIngredientRemove} />
                <button type="submit">Confirm Edit</button>
            </form>
            </div>
        </section>
    );
}

export default EditRecipe;
