import React from "react"

function AddIngredient ({ handleIngredientAdd, handleIngredientChange, handleIngredientRemove, ingredientList }) {

    return (
        <div className="form-field">
        
        {ingredientList.map((singleIngredient, index) => (
            <div key={index} className="ingredients">
            <div className="first-division">
            <label htmlFor="ingredient">Ingredient</label>
                <input
                name="ingredient"
                type="text"
                id="ingredient"
                value={singleIngredient.ingredient}
                onChange={(e) => handleIngredientChange(e, index)}
                required
                />
                <label htmlFor="measurement">Measurement</label>
                <input
                name="measurement"
                type="text"
                id="measurement"
                value={singleIngredient.measurement}
                onChange={(e) => handleIngredientChange(e, index)}
                required
                />
                {ingredientList.length - 1 === index && ingredientList.length < 10 && (
                <button
                    type="button"
                    onClick={handleIngredientAdd}
                    className="add-btn"
                >
                <span>Add an Ingredient</span>
                </button>
                )}
            </div>
            <div className="second-division">
                {ingredientList.length !== 1 && (
                <button
                    type="button"
                    onClick={() => handleIngredientRemove(index)}
                    className="remove-btn"
                >
                    <span>Remove</span>
                </button>
                )}
            </div>
            </div>
        ))}
        </div>
    );
}

export default AddIngredient;