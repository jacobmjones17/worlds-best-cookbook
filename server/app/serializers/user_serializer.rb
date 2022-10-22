class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :recipes
  has_many :ingredients, through: :recipes
end
