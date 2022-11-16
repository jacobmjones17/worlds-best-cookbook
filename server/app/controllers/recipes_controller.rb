class RecipesController < ApplicationController
    before_action :authorize
    
    def create
        
        user = User.find_by(id: session[:user_id])
        if user
            recipe = user.recipes.create(recipe_params)
            if recipe.valid?
            render json: recipe, status: :created
            else 
            render json: { errors: [recipe.errors.full_messages] }, status: :unprocessable_entity
            end
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    def update
        
        user = User.find_by(id: session[:user_id])
        recipe = Recipe.find_by(id: params[:id]) 
        # byebug
        if recipe.user_id == user.id
            recipe.update(recipe_params)
            render json: recipe
        else
            render json: { errors: [recipe.errors.full_messages] }, status: :unprocessable_entity
        end
    end

    def index
        recipes = Recipe.all

        if session[:user_id]
            render json: recipes
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    def show
        recipe = Recipe.find_by(id: params[:id])
        if recipe
            render json: recipe
        else
        render json: { error:"Recipe not found"}
        end 
    end

    def destroy
        recipe = Recipe.find_by(id: params[:id])
        if recipe.user_id == @current_user.id
            recipe.destroy
            head:no_content
        end
    end

    private 

    def recipe_params
        params.permit(:name, :instructions, :picture,  recipe_ingredients_attributes: [:ingredient, :measurement])
    end
end
