// return the maximum value in an array
function getMax(arr){
  arr.sort(function(oldNum, newNum){
    return newNum > oldNum;
  });
  return arr[0];
}

function largestOfFour(arr) {
  
  var temp = [];
  // making an array of maximum values in each array in an ascending order in a new array
  for(var i=0; i<arr.length; i++){
    temp[i] = getMax(arr[i]);
  }
    
  return temp;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
