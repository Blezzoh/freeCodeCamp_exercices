/*

Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWord(str) {
  
  var temp = str.split(" ");

  //sort the array per length
  temp.sort(function(lastStr, newStr){
    return newStr.length > lastStr.length;
  });
  return temp[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

