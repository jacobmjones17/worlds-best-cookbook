class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name
  belongs_to :recipe
end
