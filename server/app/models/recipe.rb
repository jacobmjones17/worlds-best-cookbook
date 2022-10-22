class Recipe < ApplicationRecord
    belongs_to :user
    has_many :ingredients
    validates(:instructions, { :length => { :minimum => 50 } })
    validates :name, presence: true
end
