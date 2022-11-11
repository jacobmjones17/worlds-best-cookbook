import React from "react"

function AddIngredient ({ handleServiceAdd, handleServiceChange, handleServiceRemove, ingredientList}) {

    return (
        <div className="form-field">
        
        {ingredientList.map((singleService, index) => (
            <div key={index} className="services">
            <div className="first-division">
            <label htmlFor="service">Ingredient</label>
                <input
                name="ingredient"
                type="text"
                id="service"
                value={singleService.service}
                onChange={(e) => handleServiceChange(e, index)}
                required
                />
                <label htmlFor="service">Measurement</label>
                <input
                name="measurement"
                type="text"
                id="service"
                value={singleService.measurement}
                onChange={(e) => handleServiceChange(e, index)}
                required
                />
                {ingredientList.length - 1 === index && ingredientList.length < 10 && (
                <button
                    type="button"
                    onClick={handleServiceAdd}
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
                    onClick={() => handleServiceRemove(index)}
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