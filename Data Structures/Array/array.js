const strings = ["a", "b", "c", "d", "e", "f"];

console.log(strings[3]);

// push to the array
strings.push("g"); //O(1)
console.log(strings);

// pop = pop the last item from the array
strings.pop(); //O(1)
strings.pop(); //O(1)
console.log(strings);

// unshift to the array
strings.unshift("x"); // x will be at the 1st position //O(n)
console.log(strings);

// splice
strings.splice(2, 0, "idk"); // initial array [ 'x', 'a', 'b', 'c', 'd', 'e' ] -> [ 'x', 'a', 'idk','b', 'c', 'd','e']   // O(n)
console.log(strings);

const obj = {
  a: function () {
    console.log(this);
  },
};

obj.a();
