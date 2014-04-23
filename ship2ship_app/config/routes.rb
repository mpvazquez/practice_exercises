Ship2shipApp::Application.routes.draw do
  root "welcome#index"

  resources :messages

end
