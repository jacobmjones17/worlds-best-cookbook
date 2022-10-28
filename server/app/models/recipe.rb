class Recipe < ApplicationRecord
    has_many :ingredients
    has_many :reviews
    has_many :users, through: :reviews
end
