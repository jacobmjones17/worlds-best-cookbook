class Ingredient < ApplicationRecord
    has_many :recipe_ingredients
    has_many :recipes, through: :recipe_ingredients

    def ingredient_attributes=(hash)
        self.ingredient = Ingredient.find_or_create_by(hash)
      end
end
