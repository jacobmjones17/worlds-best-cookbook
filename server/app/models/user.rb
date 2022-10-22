class User < ApplicationRecord
    has_secure_password
    has_many :recipes
    has_many :ingredients, through: :recipes
    validates :username, presence: true, uniqueness: true
end
