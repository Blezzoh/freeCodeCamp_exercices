/*
Convert a string to spinal case. 
Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  //elminating the underscore
  str = str.split(/_/g).join(" ");
  var reg = /[A-Z]/g;
  // upper to lower
  str = str.replace(reg, function(el){
    return " " + el.toLowerCase();
  });
  // join with -
  str= str.split(/\s+/).join("-");
  
  if(str[0] === "-") return str.substr(1,str.length);
  return str;
}

spinalCase('This Is Spinal Tap');
