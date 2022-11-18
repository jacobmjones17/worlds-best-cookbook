import React from "react"

function EditIngredient ({ handleIngredientUpdate, recipeIngredientList, handleIngredientChange, handleIngredientRemove }) {
    

    return (
        <div className="form-field">
        {recipeIngredientList.map((singleIngredient, index) => (
            <div key={index} className="ingredients-list">
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
                {recipeIngredientList.length - 1 === index && recipeIngredientList.length < 10 && (
                <button
                    type="button"
                    onClick={handleIngredientUpdate}
                    className="add-btn"
                >
                <span>Add an Ingredient</span>
                </button>
                )}
            </div>
            <div className="second-division">
                {recipeIngredientList.length !== 1 && (
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

export default EditIngredient;