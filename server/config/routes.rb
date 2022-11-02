Rails.application.routes.draw do

  get "/me", to: "users#show"

  resources :recipes
  resources :ingredients
  resources :users
  resources :recipe_ingredients

  post "/login", to: "sessions#create"

  post "/signup", to: "users#create"

  delete "/logout", to: "sessions#destroy"

end
