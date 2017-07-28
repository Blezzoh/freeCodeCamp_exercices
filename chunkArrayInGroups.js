/*
Write a function that splits an array
(first argument) into groups the length of size (second argument)
and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  var retArr= [];
  for (var i=0; i < arr.length; i+= size){
    var temp = [];
    for(var j=i; j<i+size && j<arr.length; j++ ){
      temp.push(arr[j]);
    }
    retArr.push(temp);
  }
  
  return retArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
