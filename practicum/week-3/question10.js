/*
Given an array of distinct integers, input,
find all pairs of elements with the minimum  difference (that is the minimum of the absolute value of the difference)
 of any two elements.

Return a list of pairs in ascending order.
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array

Example:
input: [1,-5,-10,24,19,-4,-14,23]
output: [[-5, -4], [23, 24]]
*/

var minPairs = function(input) {
  input.sort((a, b) => {
    return a - b;
  });

  let difference = 0;
  let min = Math.abs(input[input.length - 1] - input[0]);
  let arr = [];
  for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
      difference = Math.abs(input[j] - input[i]);
        if (difference < min) {
          min = difference;
      } else {
          break;
        }
    }
  }

  for (let i = 0; i < input.length - 1; i++) {
    if(Math.abs(input[i + 1] - input[i]) == min) {
      arr.push(Array(input[i], input[i + 1]));
      }
  }
  return arr;
};
