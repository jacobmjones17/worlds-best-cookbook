class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :instructions, :picture
  has_many :ingredients
  has_many :reviews
  has_many :users, through: :reviews
end
