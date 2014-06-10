require 'pry'

class Algorithm
  def initialize(nums)
    @array = []
    nums.each {|num| @array << num.to_i}

    if @array.count == 2
      evaluate_two(@array)
    end
  end

  attr_accessor :array

  def evaluate_two(array)
    first_num = @array[0]
    next_number = @array[1]
    following_numbers = []

    if next_number % first_num == 0
      divisor = next_number / first_num
      8.times do |i|
        result = next_number * divisor
        following_numbers << result
        next_number = result
      end
      puts following_numbers.to_s
    elsif Math.sqrt(next_number) == first_num
      8.times do |i|
        result = next_number ** 2
        following_numbers << result
        next_number = result
      end
    end
  end
end

puts "Please enter two or more numbers of increasing value, separated by a space"
nums = gets.chomp.split(" ")

Algorithm.new(nums)