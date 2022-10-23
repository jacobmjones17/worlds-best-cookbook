Rails.application.routes.draw do

  get "/me", to: "users#show"

  get "/recipes", to: "recipes#index"

  post "/recipes", to: "recipes#create"

  get "/ingredients", to: "ingredients#index"
  
  post "/ingredients", to: "ingredients#create"

  post "/login", to: "sessions#create"

  post "/signup", to: "users#create"

  delete "/logout", to: "sessions#destroy"

end
