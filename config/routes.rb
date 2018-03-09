Rails.application.routes.draw do
  resources :hellos
  root :to => 'hellos#index'
end
