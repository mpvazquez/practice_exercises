require 'httparty'
require 'pry'

class Pokemon
  def initialize
    @catch_em_all = HTTParty.get('http://pokeapi.co/api/v1/pokedex')
  end

  attr_reader :catch_em_all
end