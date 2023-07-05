class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.arr = [];
  }
  peek() {
    return this.arr[this.arr.length - 1];
  }
  push(value) {
    this.arr.push(value);
    return this;
  }
  pop() {
    this.arr.pop();
    return this;
  }

  printStack() {
    for (let i = this.arr.length - 1; i >= 0; i--) {
      console.log(this.arr[i]);
    }
  }
}

const myStack = new Stack();
console.log("Adding google to the stack...");
console.log(myStack.push("google"));
console.log("Added..");
console.log("---------------------------------------------------");
console.log("Adding youtube to the stack...");
console.log(myStack.push("youtube"));
console.log("Added..");
console.log("---------------------------------------------------");
console.log("Adding instagram to the stack...");
console.log(myStack.push("instagram"));
console.log("Added..");
console.log("---------------------------------------------------");
console.log("Adding github to the stack...");
console.log(myStack.push("github"));
console.log("Added..");
console.log("---------------------------------------------------");
console.log("Printing Current Stack: ");
console.log(myStack.printStack());
console.log("---------------------------------------------------");
console.log("Top value : " + myStack.peek());
console.log("---------------------------------------------------");
console.log("Removing top value");
console.log(myStack.pop());
console.log("Top value removed");
console.log("---------------------------------------------------");
console.log("Printing Current Stack: ");
console.log(myStack.printStack());
console.log("---------------------------------------------------");
console.log("Adding discord to the stack...");
console.log(myStack.push("discord"));
console.log("Added..");
console.log("---------------------------------------------------");
console.log("Printing Current Stack: ");
console.log(myStack.printStack());
console.log("---------------------------------------------------");
