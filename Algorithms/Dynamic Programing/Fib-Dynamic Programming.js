//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...

let calculations = 0;

// Time Complexity - O(2^n)
function fibonacci(n) {
  calculations++;
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("----------------------------------------------------------------");
console.log("Normal Fibonacci");
// Just to get N = 12 index which is 144, 465 operations are performed.
console.log(fibonacci(12)); // 144
console.log("No of Calculations : " + calculations); // 465

console.log("----------------------------------------------------------------");

//-------------------------------------------------------------------------------------------------------

// Using caching ...............
let calculationsF = 0;
function fibonacciMaster() {
  let cache = {};

  return function fib(n) {
    calculationsF++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

console.log("----------------------------------------------------------------");
console.log("Faster Fibonacci......");
const fasterFib = fibonacciMaster();
console.log("Dynamic Programming: ", fasterFib(12));
console.log("we did " + calculationsF + " calculations");

//--------------------------------------------------------------------------------------------------------------------------------

