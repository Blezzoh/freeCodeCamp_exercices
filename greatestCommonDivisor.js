function isPrime(number) {
    if (number % 2 == 0)
        return false;
    for (var i = 3;(i * i) <= number; i += 2) {
        if (number % i == 0)
            return false;
    }
    return true;
}

function nextPrime(number) {
    var i = number;
    while (true) {
        i++;
        if (isPrime(i)) return i;
    }
}

function findPrimeDivisors(el){
  var mapDivs = {
    2 : 0
  };
  
  var divKeys = Object.keys(mapDivs);
  for(var i = 2; i < el/2; i++ ){
    while(el % i === 0){
      mapDivs[i] ++;
      el = el/i;
    }
    console.log(mapDivs);
    return mapDivs;
  }
}
function smallestCommons(arr) {
  var divs = [];
  for(var i=0; i<arr.length; i++){
    divs[i] = findPrimeDivisors(arr[i]);
  }
  return arr;
}


smallestCommons([16,8]);
