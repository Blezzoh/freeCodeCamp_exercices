/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/
function fearNotLetter(str) {
  var num = str.charCodeAt(0) + 1;
  for(var i=1; i<str.length; i++){
    if(num !== str.charCodeAt(i)){
      return String.fromCharCode(num);
    }
    num ++;
  }
  return undefined;
}

fearNotLetter("abce");
