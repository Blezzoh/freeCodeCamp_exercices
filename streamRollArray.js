/*
Flatten a nested array. You must account for varying levels of nesting.
*/

function streamRoll(arr, newArr){
  for(var i =0; i<arr.length; i++){
    if(Array.isArray(arr[i])){
      streamRoll(arr[i], newArr);
    }
    else{
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function steamrollArray(arr) {
  return streamRoll(arr, []);
}

steamrollArray([1, [2], [3, [[4]]]]);
