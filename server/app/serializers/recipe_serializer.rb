class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :instructions, :picture, :measurement_and_name
    belongs_to :user
    # has_many :recipe_ingredients
    # has_many :ingredients, through: :recipe_ingredients

    def measurement_and_name
      
      object.recipe_ingredient.map { |recipe_ingredient| {name: recipe_ingredient.recipe_ingredient_name, measurement: recipe_ingredient.name} }
    
    end
end
