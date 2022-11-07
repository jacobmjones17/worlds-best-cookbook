class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :instructions, :picture
    belongs_to :user
    has_many :recipe_ingredients
    has_many :ingredients, through: :recipe_ingredients
end
