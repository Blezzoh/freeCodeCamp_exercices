function findMin(arr){
   arr = arr.sort(function(a, b){
    return a>b;
  });
  return arr; 
}
function makePairs(arr){
  var pairs = [];
  for(var i=arr[0]; i<arr[1]; i++){
    for(var j= i+1; j<arr[1]; j++){
      var temp = [i, j];
      pairs.push(temp);
    }
  }
  return pairs;
}
function smallestCommons(arr) {
  arr = findMin(arr);
  console.log(makePairs(arr));
  return arr;
}


smallestCommons([1,5]);
