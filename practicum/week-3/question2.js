
/*
Given an integer array, input,
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

 var largestSubarray = function(input) {
   const sum1 = Math.min(input);
   const sum = 0;
   for (var i = 0; i < input.length; i++) {
     if (sum < 0) {
       continue
     } else {
        sum += i;
        sum1 = Math.max(sum, sum1);
     }
     return sum1;
   }

 };
