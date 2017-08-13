/*
Compare two arrays and return a new array with any items only found in 
one of the two given arrays, but not both. In other words, return the
symmetric difference of the two arrays.
*/

// returns array of elements in arr1 not includedx in arr2
function diffInArray(arr1,arr2){
  var newArr = [];
  
  // Same, same; but different.
  for(var i=0; i < arr1.length; i++){
    if(arr2.indexOf(arr1[i]) == -1){
      newArr.push(arr1[i]);
    }
  }
  
  return newArr;
}


function diffArray(arr1, arr2) {
  var retArr = [];
  
  var temp = diffInArray(arr1,arr2);
  retArr = retArr.concat(temp);
  
  temp = diffInArray(arr2,arr1);
  retArr = retArr.concat(temp);

  return retArr;
  
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
