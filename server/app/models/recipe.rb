class Recipe < ApplicationRecord
    belongs_to :user
    has_many :recipe_ingredients
    has_many :ingredients, through: :recipe_ingredients

    validates :name, uniqueness: true
    validates :name, :instructions, :picture, presence: true

    def recipe_ingredients_attributes=(array)
      array.each do |hash|

        if hash.has_key? (:id)
          updated_ids = array.map { |object| object[:id]}.delete_if(&:nil?)
          self.recipe_ingredients.each {|obj| obj.delete if !updated_ids.include?(obj.id)}

          ingredient = Ingredient.find(hash["ingredient_id"])
          ingredient.update(name: hash["ingredient"])
          recipe_ingredient = RecipeIngredient.find(hash["id"])
          recipe_ingredient.update(measurement: hash["measurement"], ingredient_id: ingredient.id)

        else
          new_ingredient = Ingredient.find_or_create_by(name: hash["ingredient"])
          self.recipe_ingredients.build(ingredient_id: new_ingredient.id, measurement: hash["measurement"])
        end
      end
  end
end
