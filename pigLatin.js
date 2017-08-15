/*
Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) 
of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase.
*/

// return number of consonants before first vowel
function findNumberOfConsonants(str){
  var num =0;
  var vowels = ["a","e","i","o","u"];

  for(var i =0; i < str.length; i++){
    if(vowels.indexOf(str[i].toLowerCase()) != -1){
     break; 
    }
    num ++;
  }
  return num;
}


function translatePigLatin(str) {
  var numberOfConsonants = findNumberOfConsonants(str);
  
  // if it starts with a vowel
  if(numberOfConsonants == 0){
    return str + "way";
  }
  // starts with a consonant
  else{
    return str.substr(numberOfConsonants, str.length) + str.substr(0, numberOfConsonants) + "ay";
  }
}

translatePigLatin("hhhhhaa");
