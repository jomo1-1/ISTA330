/*
Given an integer n,
put each number from 1 to n
into groups based on the sum of its digits.

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function(n) {
  let map = new Map();

  for (let i = 1; i <= n ; i++) {
    let num = i
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
      map.set(sum, (map.get(sum) || 0) + 1);
  }

  let result = new Map();
  for (let [kk, val] of map.entries()) {
    result.set(val, (result.get(val) || 0 ) + 1)
  }

  let finder = 0;
  for (let [km, vm] of result.entries()) {
    finder = Math.max(finder, km);
  }

  return result.get(finder);
};
