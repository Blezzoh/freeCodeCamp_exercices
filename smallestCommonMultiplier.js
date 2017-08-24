/*
Find the smallest common multiple of the provided parameters that
can be evenly divided by both, as well as by all sequential numbers
in the range between these parameters.

The range will be an array of two numbers 
that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3
that is evenly divisible by all numbers between 1 and 3.
*/
// checks if the number is prime
function isPrime(number) {
    if (number % 2 == 0)
        return false;
    for (var i = 3;(i * i) <= number; i += 2) {
        if (number % i == 0)
            return false;
    }
    return true;
}
// finds the next prime
function nextPrime(number) {
    var i = number;
    while (true) {
        i++;
        if (isPrime(i)) return i;
    }
}
// sorts the array in an increasing order
function sortMin(arr){
   arr = arr.sort(function(a, b){
    return a>b;
  });
  return arr; 
}
// return the object containing the common multipliers of both a and b
function commonMultiple(a, b){
  var divsOfA = findDivs(a);
  var divsOfB = findDivs(b);
  var commonMultiples = divsOfA;
  var keys = Object.keys(divsOfB);
  for(var i = 0; i <keys.length; i++){
    if(commonMultiples[keys[i]] === undefined || commonMultiples[keys[i]] < divsOfB[keys[i]]){
      commonMultiples[keys[i]] = divsOfB[keys[i]];
    }
  }
  return commonMultiples;
}
// return all the prime divisors of the number
function findDivs(num){
  var temp = {};
  var prime = 2;
  while(num>=prime){
    if(num % prime == 0){
      if(temp[prime] === undefined){
        temp[prime] = 1;
      }
      else temp[prime] ++;
      num /= prime;
    }
    else prime = nextPrime(prime);
  }
  return temp;
}

// return returns the product of the object keys, object values times
// eg: {2:2, 3:1} will return 2 * 2* 3
function multiply (obj){
  var keys = Object.keys(obj);
  var retVal = 1;
  for(var i=0; i<keys.length; i++){
    for(var j = 0; j<obj[keys[i]]; j++){
      retVal *= keys[i];
    }
  }
  return retVal;
}

function smallestCommons(arr) {
   // sorting the array
  arr = sortMin(arr);
   // cumulative common multiplier
  var commonMult = 1;
  for(var i=arr[0]; i<=arr[1]; i++){
    for(var j=i+1; j<=arr[1]; j++){
       // common Multiples of the 2 values in the range
      var divs = commonMultiple(i,j);
      var mult = multiply(divs);
       // cumulative common multiple
      var temp = commonMultiple(commonMult, mult);
      commonMult = multiply(temp);
    }
  }

  return commonMult;
}


smallestCommons([1,5]);
