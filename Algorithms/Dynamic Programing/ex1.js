// Caching

function findAreaCircle(r) {
  let pi = Math.PI;
  return pi * r * r;
}

// without caching
console.log("----------------------------------------------------------------");
console.log("Without caching....");
let start = performance.now();
console.log(findAreaCircle(5));
console.log(findAreaCircle(15));
console.log(findAreaCircle(25));
console.log(findAreaCircle(35));
console.log(findAreaCircle(25));
console.log(findAreaCircle(15));
console.log(findAreaCircle(5));
console.log(findAreaCircle(75));
let timeTaken = performance.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");
console.log("----------------------------------------------------------------");

//Memoization
let cache = {};
function memoizedFindAreaCircle(r) {
  if (r in cache) {
    return cache[r];
  } else {
    // console.log("Without cache... calculating area...");
    cache[r] = Math.PI * r * r;
    return cache[r];
  }
}

console.log("----------------------------------------------------------------");
console.log("With caching....");
let startM = performance.now();
console.log(memoizedFindAreaCircle(5));
console.log(memoizedFindAreaCircle(15));
console.log(memoizedFindAreaCircle(25));
console.log(memoizedFindAreaCircle(35));
console.log(memoizedFindAreaCircle(25));
console.log(memoizedFindAreaCircle(15));
console.log(memoizedFindAreaCircle(5));
console.log(memoizedFindAreaCircle(75));
let timeTakenM = performance.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");
console.log("----------------------------------------------------------------");

// let's make that better with no global scope. This is closure in javascript so.

function memoizedClosureFindAreaCircle() {
  let cache = {};
  return function (r) {
    if (r in cache) {
      console.log("Cached value...");
      return cache[r];
    } else {
      console.log("Without cache... calculating area...");
      cache[r] = Math.PI * r * r;
      return cache[r];
    }
  };
}

const memoized = memoizedClosureFindAreaCircle();

console.log("----------------------------------------------------------------");
console.log(memoized(85));
console.log(memoized(90));
console.log(memoized(100));
console.log(memoized(85));
console.log("----------------------------------------------------------------");
