/*
Given an array of integers, input,
a d-integer is an integer which has
a frequency in the array equal to its value.

Return a d-integer. If there are multiple
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function(input) {
  let map = new Map();
  for (let i = 0; i < input.length; i++) {
    map.set(input[i], map.get(input[i]) + 1 || 1);
  }

  const sortm = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

  /*
  const sortm = new Map([...map.entries()].sort(function(a, b) {
    b[1] - a [1]
  }));
  */

  for (let [key, value] of sortm) {
    if (key === value){
      return key;
      }
  }
  return -1;
};
