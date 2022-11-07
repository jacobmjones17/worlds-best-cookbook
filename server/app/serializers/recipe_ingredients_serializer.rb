class RecipeIngredientsSerializer < ActiveModel::Serializer
  attributes :id, :recipe_id, :ingredient_id, :recipe_ingredient_name, :measurement
  belongs_to :recipe
  belongs_to :ingredient
end
