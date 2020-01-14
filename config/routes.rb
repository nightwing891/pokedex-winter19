Rails.application.routes.draw do
  namespace :api do
    resources :pokemons 
  end



  get '*other', to: 'static#index'
end
