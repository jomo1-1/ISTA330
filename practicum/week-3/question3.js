/*
Given a non-negative integer n,
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1]
]
*/

var PascalTriangle = function(n) {
  let array = [];
  var sum;
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let x = 0; x <= i; x++) {
    if(x === i || x === i) row.push(1);
      else {
        sum = array[i - 1][x - 1] + array[i - 1][x];
        array[i].push(sum);
    }
    }
  }
  return array;
};
