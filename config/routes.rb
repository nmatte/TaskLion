Rails.application.routes.draw do
  resources :users, only: [:create, :new, :update]
  match 'account', to: 'users#edit', via: [:get]

  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :categories, only: [:index, :show]
    resources :tasks, only: [:show] do
      resources :taskers, only: [:index]
    end

    resources :bookings, only: [:show, :create, :destroy, :update]
    resources :taskers, only: [:show]
    match 'current_user', to: 'users#current', via: [:get]
  end

  root to: "static_pages#root"
end
