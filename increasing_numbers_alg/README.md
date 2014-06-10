# Problem

Suppose you get a short input of increasing integers, say, "2 4", can you figure out what integers come after 4? If you assume the second integer is +2 greater than the first, then the next integer should be 6; but if you assume the second integer is double the first integer, then perhaps the next integer is 8. However, if the short input was "2 4 8", then you can almost be sure that the next integer is 16.

In short, the more numbers you get, the more hypotheses you can eliminate. We would like you to write a program, in Ruby, Python, Javascript, Java or C#. Please clearly indicate which one you would like to use. The program takes in a short list of increasing integers as inputs, hypothesize possible patterns in the integers, and generate the next 10 integers in line.


For instance, if the program receives the following input: 
4 14

the program may assume that the next integer is the previous integer plus 10, thus it will generate:
24 34 44 54 64 74 84 94 104 114

but if the program receives the following input instead:
4 14 34

then it may hypothesize that the next integer is the previous multiplied by 2 plus 6.
74 154 3314 634 1274 2554 5114 10234 20474 40954



