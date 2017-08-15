/*
Write a function that takes two or more arrays and returns a new array
of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be 
included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order,
but the final array should not be sorted in numerical order.
*/

// check if arr contains element
function hasElement(arr, element){
  if(arr.indexOf(element) === -1){
    return false;
  }
  else{
    return true;
  }
}

//main function
function uniteUnique(arr) {
  var args = Array.from(arguments);
  var retArr = [];
  retArr[0]= args[0][0];
  for(var i = 0; i < args.length; i++){
    for(var j = 0; j < args[i].length; j++){
      if(!(hasElement(retArr, args[i][j]))){
        retArr.push(args[i][j]);
      }
    }
  }
  return retArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
