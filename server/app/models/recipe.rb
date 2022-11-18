class Recipe < ApplicationRecord
    belongs_to :user
    has_many :recipe_ingredients
    has_many :ingredients, through: :recipe_ingredients

    validates :name, uniqueness: true

    def recipe_ingredients_attributes=(array)
        array.each do |hash|
          
          if hash.has_key? (:id)
            ingredient = Ingredient.find(hash["ingredient_id"])
            ingredient.update(name: hash["ingredient"])
            recipe_ingredient = RecipeIngredient.find(hash["id"])
            recipe_ingredient.update(measurement: hash["measurement"], ingredient_id: ingredient.id)
            
            self.recipe_ingredients_ids.for_each do |id|
              byebug
              updated_ids = array.map { |object| object.id}
              RecipeIngredient.find(id).delete if !updated_ids.includes(id)
            end
          else
            new_ingredient = Ingredient.find_or_create_by(name: hash["ingredient"])
            self.recipe_ingredients.build(ingredient_id: new_ingredient.id, measurement: hash["measurement"])
          end
        end
    end
end
