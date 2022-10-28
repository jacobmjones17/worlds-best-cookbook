class User < ApplicationRecord
    has_secure_password
    has_many :recipes
    has_many :reviews, through: :recipes
    
    validates :username, uniqueness: true
    validates :username, presence: true
end
