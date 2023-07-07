class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    //return this.top;
    return this.top.value;
  }
  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;

    // return this.printStack();
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;

    // return holdingPointer.value;
    return holdingPointer;
  }
  //isEmpty

  printStack() {
    const arr = [];
    let currentNode = this.top;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
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
