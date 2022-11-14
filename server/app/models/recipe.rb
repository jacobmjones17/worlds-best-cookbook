class Recipe < ApplicationRecord
    belongs_to :user
    has_many :recipe_ingredients
    has_many :ingredients, through: :recipe_ingredients
    accepts_nested_attributes_for :recipe_ingredients

    validates :name, uniqueness: true

    def recipe_ingredients_attributes=(array)
        array.each do |hash|
          # byebug
          new_ingredient = Ingredient.find_or_create_by(name: hash[:name])
          self.recipe_ingredients.create(ingredient_id: new_ingredient.id, measurement: hash[:measurement])
        end
    end
end
