
/*
Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
*/

function reverseString(str) {
  var newStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

// long Name
function removeSpecialCharactersAndLowerTheCase(str) {
  // remove all special characters, white spaces, and punctuation.
  var expression = /[^a-zA-Z0-9]/g;
  var newStr = str.replace(expression, "");

  return newStr.toLowerCase();
}

function palindrome(str) {
  str =  removeSpecialCharactersAndLowerTheCase(str);
  var newStr = str;
  newStr = reverseString(newStr);
  str = str.toLowerCase();
  console.log(str);
  console.log(newStr);
  console.log(str === newStr);
  return str === newStr;
}

palindrome("_eye");

