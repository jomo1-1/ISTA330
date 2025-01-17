/*
Given an array of size n,
find the m-element.
The m-element is
the element that appears more than ⌊ n/2 ⌋ times.

If the m-element does not exist return -1.

Example:
input: [1, 2, 2, 3, 2, 7, 2]
output: 2
*/

var m_element = function(input) {
  input = input.sort(function(n1, n2) {
    n1 - n2
  });
  return(input[Math.floor(input.length / 2)]);
};
