/*
ne of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted
by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function toRot13(letter){
  var num = letter.charCodeAt(0) - 64;//A starts at 65
  var bool = (num > 0) && (num <27);
  if(!bool){
    return letter;
  }
  else if(num < 14)
    num += 13;
  else 
    num -=13;
  
  return String.fromCharCode(num + 64);

}


function rot13(str) {// LBH QVQ VG!
  var temp = "";
  for(var i = 0; i<str.length; i++){
    temp += toRot13(str[i]);
  }
  
  return temp;
}

// Change the inputs below to test
rot13("LBH QVQ VG!");
