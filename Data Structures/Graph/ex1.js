// Edge List

//     2 - 0
//    / \
//   1 - 3

const graph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

// Adjacenct List
// the index of the array is the value of the actual graph node
const graphl = [[2], [2, 3], [0, 1, 3], [1, 2]];

// Adjacenct Matrix
const graphm = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
];
