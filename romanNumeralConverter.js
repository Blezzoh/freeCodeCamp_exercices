/* Converts the given number into a roman numeral.
 * Gives the right answer for numbers that are less than 4000
*/

// roman numbers logic
function syntax(num, i, j, k){
  var ret ="";
  switch(num){
    case 0:
      break;
    case 1:
      ret += i;
      break;
    case 2:
      ret = "" + i + i;
      break;
    case 3:
      ret = "" + i+ i+i;
      break;
    case 4:
      ret = "" + i + j;
      break;
    case 5:
      ret += j;    
      break;
    case 6:
      ret = "" + j+i;
      break;
    case 7:
      ret = "" + j+i+i;
      break;
    case 8:
      ret = "" + j+i+i+i;
      break;
    case 9:
      ret = "" + i + k;
      break;
   }
  return ret;
}

// checking the range and calling the synraxer with the right numbers
function callSyntaxer(arr, accumulator, temp){
  if(accumulator === 10){
      arr.push(syntax(temp, "I", "V", "X"));
    }
    else if(accumulator === 100){
      arr.push(syntax(temp, "X", "L", "C"));
    }
    else if(accumulator === 1000){
      arr.push(syntax(temp, "C", "D", "M"));
    }
    else if(accumulator === 10000){
      arr.push(syntax(temp, "M", "#V", "#X"));
    }
}


function arrToNumber(arr){
  var str = "";
  for(var i = arr.length -1; i>=0; i--){
    str +=arr[i];
  }
  return str;
}


function convertToRoman(num) {
  var accumulator = 10;
  var roman = [];
  
  while(num > 9){
    //reminder of division by 10 gives the last digit
    var temp = num % 10;
    num = Math.floor(num/10);
    callSyntaxer(roman,accumulator, temp);
    accumulator *=10;
  }
  callSyntaxer(roman, accumulator, num);
  var romanNumber = arrToNumber(roman);
  
  return romanNumber;
}

convertToRoman(36);
