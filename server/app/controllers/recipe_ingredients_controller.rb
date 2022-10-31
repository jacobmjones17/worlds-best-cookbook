class RecipeIngredientsController < ApplicationController
    def create
        user = User.find_by(id: session[:user_id])
        if user
            recipe_ingredient = user.recipes.recipe_ingredients.create(recipe_ingredient_params)
            if recipe_ingredient.valid?
            render json: recipe_ingredient, status: :created
            else 
            render json: { errors: [recipe.errors.full_messages] }, status: :unprocessable_entity
            end
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

        def index
            recipe_ingredients = Recipe.recipe_ingredients.all
            if session[:user_id]
                render json: recipe_ingredients
            else
                render json: { errors: ["Not authorized"] }, status: :unauthorized
            end
        end

        private 

        def recipe_ingredient_params
            params.permit(:measurement)
        end
end
