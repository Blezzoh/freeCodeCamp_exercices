/*
Return the remaining elements of an array after chopping off n elements from the head.
The head means the beginning of the array, or the zeroth index.
*/


function slasher(arr, howMany) {
  var retArr= [];
  for (var i = howMany; i < arr.length; i++)
    retArr.push(arr[i]);

  return retArr;
}

slasher([1, 2, 3], 2);
slasher(["burgers", "fries", "shake"], 1);
