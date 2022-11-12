class IngredientsController < ApplicationController
    # def create
    #     user = User.find_by(id: session[:user_id])

    #     if user
    #         ingredient = user.recipes.ingredients.create(ingredient_params)
    #         if ingredient.valid?
    #         render json: ingredient, status: :created
    #         else 
    #         render json: { errors: [ingredient.errors.full_messages] }, status: :unprocessable_entity
    #         end
    #     else
    #         render json: { errors: ["Not authorized"] }, status: :unauthorized
    #     end
    # end

    def index
        ingredients = Ingredient.all

        if session[:user_id]
        render json: ingredients
        else
        render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    # private

    # def recipe_params
    #     params.permit(:name)
    # end
end
