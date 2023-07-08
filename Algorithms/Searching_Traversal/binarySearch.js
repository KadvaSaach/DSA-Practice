const arr = [1, 3, 5, 7, 8, 9];
const x = 8;

function iterative(arr, value) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === value) {
      return true;
    } else if (arr[mid] < value) {
      start = mid + 1;
    } else {
      start = mid - 1;
    }
  }
  return false;
}

function recursive(arr, value, start, end) {
  if (start > end) {
    return false;
  }

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === value) {
    return true;
  }

  if (arr[mid] > value) {
    return recursive(arr, value, start, mid - 1);
  } else {
    return recursive(arr, value, mid + 1, end);
  }
}

console.log(iterative(arr, x));
console.log(iterative(arr, x, 0, arr.length - 1));
