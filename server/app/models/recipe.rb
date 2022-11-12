class Recipe < ApplicationRecord
    belongs_to :user
    has_many :recipe_ingredients
    has_many :ingredients, through: :recipe_ingredients

    validates :name, uniqueness: true

    def recipe_ingredients_attributes=(array)
        array.each do |item|
          recipe_ingredients.build(item)
        end
      end
end
