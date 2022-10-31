Rails.application.routes.draw do

  get "/me", to: "users#show"

  get "/recipes", to: "recipes#index"

  post "/recipes", to: "recipes#create"

  get "/ingredients", to: "ingredients#index"
  
  post "/ingredients", to: "ingredients#create"

  get "/recipeIngredients", to: "recipe_ingredients#index"

  post "/recipeIngredients", to: "recipe_ingredients#create"

  post "/login", to: "sessions#create"

  post "/signup", to: "users#create"

  delete "/logout", to: "sessions#destroy"

end
