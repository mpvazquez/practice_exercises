require 'pry'

class Algorithm
  def initialize(nums)
    @array = []
    nums.each {|num| @array << num.to_i}
  end

  attr_accessor :array

  def evaluate

  end
end

puts "Please enter two or more numbers of increasing value, separated by a space"
nums = gets.chomp.split(" ")

Algorithm.new(nums)