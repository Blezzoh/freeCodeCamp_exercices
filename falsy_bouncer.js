/*
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

var falsies = [false, null, 0, "", NaN, undefined];

function bouncer(arr) {
  
  var index = 0;
  
  while(index< arr.length){
    if(falsies.includes(arr[index]))
      arr.splice(index, 1);
    else
      index ++;
  }     
  return arr;
}

bouncer([7, "ate", "", false, 9]);
