Rails.application.routes.draw do

  get "/me", to: "users#show"

  resources :recipes
  resources :ingredients
  resources :users
  resources :recipe_ingredients

  #get dynamic route working

  get "/recipes/:id", to: "recipes#show"

  get "/recipes/search/:keyword", to: "recipes#show_specific"

  post "/login", to: "sessions#create"

  post "/signup", to: "users#create"

  delete "/logout", to: "sessions#destroy"

end
