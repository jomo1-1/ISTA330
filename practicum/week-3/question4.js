/*
Given an array of integers,
return true if the array contains any duplicates.
Your function should return true
if any value appears at least twice
in the array,
and it should return false
if every element is distinct.

Example:
 input: [19,1,1,23,23,4,3,23,1,2]
 output: true
*/

var hasDuplicates = function(input) {
  if (input.length === 1) return false;
  for (var i = 0; i < input.length; i++) {
    for (var x = 0; x < i; ++x) {
      if (input[x] == input[i]) {
        return true;
      }
    }
  }
  return false;
};
