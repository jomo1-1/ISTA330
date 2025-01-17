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
  // let sum;
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let x = 0; x <= i; x++) {
    if(x === i || x === 0) row.push(1);
      else {
      let sum = array[i - 1][x - 1] + array[i - 1][x];
        row.push(sum);
    }
    }
    array.push(row);
  }
  return array;
};
