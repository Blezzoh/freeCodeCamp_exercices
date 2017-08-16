/*
Given a positive integer num, 
return the sum of all odd Fibonacci numbers
that are less than or equal to num.
*/
function sumFibs(num) {
  if(num === 2){
    return 2;
  }
  else if(num === 1){
    return 1;
  }
  else{
    var fibs = [];
    fibs.push(1,1);
    var sum = 2;
    for(var i=2; i < num; i++){
      fibs.push(fibs[i-1] + fibs[i-2]);
      if(fibs[i] > num){
        break;
      }
      if(fibs[i]%2 === 1){
        sum += fibs[i];
      }
    }
    return sum;
  }
  
}

sumFibs(10);
