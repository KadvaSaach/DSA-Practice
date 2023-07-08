var beasts = ["Centaur", "Godzilla", "Mosura", "Minotaur", "Hydra", "Nessie"];

console.log("Using indexOf() function which will return the index");
console.log("Index of Minotaur: " + beasts.indexOf("Minotaur"));
console.log("------------------------------------------------");

console.log("Using findIndex() function which takes function as parameter");
console.log("Index of Minotaur: ");
console.log(
  beasts.findIndex(function (item) {
    return item === "Minotaur";
  })
);
console.log("------------------------------------------------");

console.log(
  "Using find() function which takes function as parameter and returns actual value instead of index"
);
console.log(
  beasts.find(function (item) {
    return item === "Minotaur";
  })
);
console.log("------------------------------------------------");

console.log("Using includes() function which returns the boolean value");
console.log(beasts.includes("Minotaur"));
console.log("------------------------------------------------");
