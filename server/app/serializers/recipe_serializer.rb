class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :instructions, :picture
  belongs_to :user
  has_many :ingredients
end
