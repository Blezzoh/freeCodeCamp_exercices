/*
Sum all the prime numbers up to and including the provided number.
A prime number is defined as a number greater than one and having 
only two divisors, one and itself. For example, 2 is a prime number 
because it's only divisible by one and two.

The provided number may not be a prime.
*/

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

function sumPrimes(num) {
  console.log(nextPrime(11));
    if (num === 1)
        return num;
    else{
      var sum = 1;
      var next = 1;
      for( ; next<=num; next = nextPrime(next)){
        sum += next;
      }
      return sum;
    }
}

sumPrimes(10);
