class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :instructions, :picture
end
