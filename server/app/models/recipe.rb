class Recipe < ApplicationRecord
    has_many :ingredients
    has_many :recipe_ingredients, through: ingredients
    belongs_to :user
end
