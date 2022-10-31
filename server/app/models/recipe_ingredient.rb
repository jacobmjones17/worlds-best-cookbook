class RecipeIngredient < ApplicationRecord
    belongs_to :recipe
    belongs_to :ingredient

    def recipe_ingredient_name
        self.ingredient.name
    end
end
