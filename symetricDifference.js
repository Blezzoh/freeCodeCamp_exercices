/*
Create a function that takes two or more arrays and returns an array of the symmetric 
difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical 
term "symmetric difference" of two sets is the set of elements which are in either of the 
two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference
you take (say on a set D = {2, 3}), you should get the set with elements which are in either
of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
*/

// removes the duplicated values in the array
function removeDuplicates(arr){
  var retArr = [arr[0]];
  
  for(var i=0; i<arr.length; i++){
    if(retArr.indexOf(arr[i]) === -1){
       retArr.push(arr[i]);
    }
  }
  return retArr;
}

// return arr1 \ arr2
function doSym(arr1, arr2){
  var retArr = [];
  for(var i=0; i<arr1.length; i++){
    if(arr2.indexOf(arr1[i]) === -1){
      retArr.push(arr1[i]);
    }
  }
  for(var j=0; j<arr2.length; j++){
    if(arr1.indexOf(arr2[j]) === -1){
      retArr.push(arr2[j]);
    }
  }
  return retArr;
}

function sym(args) {
  var allArgs = Array.from(arguments);
  var retArr = doSym(allArgs[0],allArgs[1]);
  for(var i=2; i<allArgs.length; i++){
    retArr= doSym(retArr,allArgs[i]);
  }
  retArr = removeDuplicates(retArr);
  return retArr;
}

sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
