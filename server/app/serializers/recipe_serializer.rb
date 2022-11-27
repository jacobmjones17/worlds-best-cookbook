class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :instructions, :picture, :measurement_and_name
    belongs_to :user

    def measurement_and_name
      object.recipe_ingredients.map { |recipe_ingredient| {id: recipe_ingredient.id, ingredient_id: recipe_ingredient.ingredient_id, ingredient: recipe_ingredient.recipe_ingredient_name, measurement: recipe_ingredient.measurement} }
    end
end
