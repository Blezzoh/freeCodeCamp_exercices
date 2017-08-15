/*
Perform a search and replace on the sentence using the arguments provided
and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
NOTE: Preserve the case of the original word when you are replacing it. For example
if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
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

function myReplace(str, before, after) {
  var arr = str.split(" ");
  for(var i = 0; i<arr.length; i++){
    // finding before
    if(arr[i] === before){
      var num = arr[i].charCodeAt(0);
      if(num >= 65 && num <= 90){
        arr[i] = capitalize(after);  
      }
      else{
        arr[i] = after;
      }
      break;
    }
  }
  return arr.join(" ");
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
