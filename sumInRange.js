/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
*/

// returns the maximum element in the array
function getMax(arr){
  var max = arr.reduce(function(a,b){
    return Math.max(a,b);
  });
  return max;
}

//return min in the array
function getMin(arr){
  var min = arr.reduce(function(a,b){
    return Math.min(a,b);
  });
  return min;
}

function sumAll(arr) {
  var sum = 0;
  for(var i=getMin(arr); i<=getMax(arr); i++)
    sum += i;
  return sum;
}

sumAll([1, 4]);
