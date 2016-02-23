Rails.application.routes.draw do
  resources :users, only: [:create, :new]

  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :categories, only: [:index]
  end

  root to: "static_pages#root"
end
