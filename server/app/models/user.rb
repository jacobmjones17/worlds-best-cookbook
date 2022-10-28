class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :recipes, through: :reviews
    
    validates :username, uniqueness: true
    validates :username, presence: true
end
