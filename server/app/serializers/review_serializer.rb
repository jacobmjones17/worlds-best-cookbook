class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :rating, :reviewer_username, :recipe_name
  
  belongs_to :recipe
  belongs_to :user

  def reviewer_username
    object.user.username
  end

  def recipe_name
    object.recipe.name
  end
end
