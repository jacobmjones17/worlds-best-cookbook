import React from "react"

function NewRecipe ({ onAddRecipe }) {

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newRecipeInfo = {
            "ingredient": formData.ingredient !== "" ? formData.ingredient : null,
            "measurement": formData.measurement !== "" ? formData.measurement : null
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
                ingredient: "",
                measurement: "",
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
                <button type="add-ingredient">Add Ingredient</button>
                
            </form>
            </div>
        </section>
    );
}

export default NewRecipe;