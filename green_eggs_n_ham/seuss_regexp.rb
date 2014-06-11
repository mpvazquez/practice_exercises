require 'pry'

def save_as( fname, contents )
  if File.exists? fname
    print "File exists, overwrite? [y/n] "
    return if gets.chomp != "y"
  end

  f = File.open fname, "w+"
  f.write contents
  f.close
end

f = File.new "seuss.txt", "r"
text = f.read
f.close

binding.pry 

# Begin commands from README.md

p text.scan(/Sam[^-]/).count
save_as( 'list.txt', text.scan(/(?:a)\s(\w+)/).uniq.flatten! )
save_as( 'sammy_jam.txt', text.gsub("Sam-I-am", "Sammy Jam"))


