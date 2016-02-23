Rails.application.routes.draw do
  resources :users, only: [:create, :new]

  resource :session, only: [:new, :create, :destroy]

  root to: "static_pages#root"
end
