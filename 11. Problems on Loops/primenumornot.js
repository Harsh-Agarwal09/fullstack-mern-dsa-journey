// Given a number x, write a function to determine whether the number is a prime number or not.

function isPrime(x) {
  for (let i = 2; i <= x - 1; i++) {
    if (x % i == 0) {
      // we found a number in range [2, x - 1] which divides x 
      // hence x is non prime
      return false;
    }
  }
  // The loop completed but we didnt return false, that means no number in the range [2, x - 1] divides x, hence x is prime
  return true;
}
console.log(isPrime(15));
