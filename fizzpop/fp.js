// Write a program using JavaScript, that prints the numbers from 1 to 100. 
// But for multiples of three, print the word “Fizz” instead of the number and 
// for multiples of five, print the word “Buzz”. 
// For numbers which are multiples of both three and five, print “FizzBuzz.”

for(var i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    if (i % 3 === 0) {
      console.log("FizzBuzz");
    } else {
      console.log("Buzz");
    }
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}