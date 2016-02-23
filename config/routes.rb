Rails.application.routes.draw do
  resources :users, only: [:create, :new]

  resources :sessions, only: [:new, :create, :destroy]

  root to: "static_pages#root"
end
