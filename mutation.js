/*
Return true if the string in the first element of the array contains all 
of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters 
in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" 
does not contain a "y".
Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

function containsElement(str, element){
  if(str.indexOf(element) === -1)
    return false;
  return true;
} 

function mutation(arr) {
  //avoiding case sensitivity
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
  
  var splitted = arr[1].split("");
  
  //checking that the string at the 0 index contains every character of the string at the first index
  for (var i = 0; i <splitted.length; i++){
  
    if ( !( containsElement(arr[0], splitted[i])) )
        return false;
  }
  return true;
}

mutation(["hello", "hey"]);
