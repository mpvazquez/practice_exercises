require 'sinatra'
require 'sinatra/reloader'
require './pokemon.rb'

response = Pokemon.new

get '/' do
  if response == nil
    response = Pokemon.new
  else
    response
  end

  @all_pokemon = response.catch_em_all['objects'][0]['pokemon']
  erb :index
end