//Create a function that reverses a string:
// 'Hi My name is Andrei' should be:
// 'ierdnA si eman yM iH'

function revString(str) {
  if (!str || typeof str !== "string") return str;

  const rev = [];
  const strLen = str.length - 1;

  for (let i = strLen; i >= 0; i--) {
    rev.push(str[i]);
  }

  return rev.join("");
}

const a = revString("Hello world!");
const b = revString("Hi My name is Andrei");
console.log(a);
console.log(b);

const c = revString(1233);
console.log(c);

//using built-in functions
const reverse2 = (str) => [...str].reverse().join("");
console.log(reverse2("Hello world!"));
