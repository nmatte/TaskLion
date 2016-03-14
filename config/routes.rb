Rails.application.routes.draw do
  resources :users, only: [:create, :new, :update]
  match 'account', to: 'users#edit', via: [:get]

  resource :session, only: [:new, :create, :destroy] do
    match 'demo', to: 'sessions#demo', via: [:post]
  end

  namespace :api, defaults: {format: :json} do
    match 'categories/featured', to: 'categories#featured', via: [:get]
    resources :categories, only: [:index, :show]

    match 'tasks/search', to: 'tasks#search', via: [:get]
    resources :tasks, only: [:show] do
      resources :taskers, only: [:index]
    end

    resources :bookings, only: [:show, :create, :destroy, :update, :index] do
      resources :reviews, only: [:show]
    end

    resources :taskers, only: [:show] do
      resources :reviews, only: [:index]
      resources :available_tasks, only: [:index]
    end

    resources :available_tasks, only: [:show]

    match 'current_user', to: 'users#current', via: [:get]
    match 'current_bookings', to: 'users#current_bookings', via: [:get]
  end

  root to: "static_pages#root"
end
