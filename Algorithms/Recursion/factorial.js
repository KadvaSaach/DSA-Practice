// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  if (number == 0 || number == 1) {
    return 1;
  } else return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  let answer = 1;
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}

console.log("Using Recursive: " + findFactorialRecursive(5));
console.log("Using Iterative: " +findFactorialIterative(5));

console.log("Using Recursive: " + findFactorialRecursive(8));
console.log("Using Iterative: " +findFactorialIterative(8));