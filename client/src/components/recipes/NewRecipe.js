import React, { useState } from "react";
import AddIngredient from "../ingredients/AddIngredient"

function NewRecipe ({ onAddRecipe }) {
    const [formData, setFormData] = useState({
        name: "",
        instructions: "",
        picture: "",
    });

    const [ingredientList, setIngredientList] = useState([{ ingredient: "", measurement: ""}]);

    const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...ingredientList];
    list[index][name] = value;
    setIngredientList(list);
    };

    const handleServiceRemove = (index) => {
    const list = [...ingredientList];
    list.splice(index, 1);
    setIngredientList(list);
    };

    const handleServiceAdd = () => {
    setIngredientList([...ingredientList, { ingredient: "", measurement: "" }]);
    };



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
                
                <AddIngredient handleServiceChange={handleServiceChange} handleServiceRemove={handleServiceRemove} handleServiceAdd={handleServiceAdd} ingredientList={ingredientList}/>
                <button type="submit">Submit Recipe</button>
            </form>
            </div>
        </section>
    );
}

export default NewRecipe;
