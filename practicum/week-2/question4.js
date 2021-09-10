/*
You are given strings A and B.
How many of the letters in B are also present in A?

The letters in A are guaranteed distinct, and all characters in A and B are letters.
 Letters are case sensitive.

 Example:
 input: A='gtY', B = 'iTygrtg'
 output: 3
*/

/*
  let letters = 0;
  function repeat (A, f) {
  for (let i = 0; i < A.length; i++) {
    f(i);
      if (A[i] == f[i]) {
        letters++;
          }
      }
  }

  return letters;

*/

var howManyCommon = function(A, B) {
  let letters = 0;
  for (let i = 0, j = 0; i < A.length && j < B.length; i++, j++) {
      if (A[i] == B[j]) {
        letters++;
      }
    }
  }
  return letters;
};
