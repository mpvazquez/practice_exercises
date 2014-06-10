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
    second_num = @array[1]
    following_numbers = []

    if second_num % first_num == 0
      divisor = second_num / first_num
      8.times do |i|
        result = second_num * divisor
        following_numbers << result
        second_num = result
      end
      puts following_numbers.to_s
    end
  end
end

puts "Please enter two or more numbers of increasing value, separated by a space"
nums = gets.chomp.split(" ")

Algorithm.new(nums)