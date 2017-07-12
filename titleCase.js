/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function capitalize(str){
  var temp = "";
  for(var i = 0 ; i< str.length; i++){
    if(i === 0)
      temp += str[i].toUpperCase();
    else
      temp += str[i].toLowerCase();
  }
  console.log(temp);
  return temp;
}

function titleCase(str) {
  var temp = str.split(" ");
  for(var i = 0; i< temp.length; i ++){
    temp[i] = capitalize(temp[i]); 
  }
  return temp.join(" ");
}


