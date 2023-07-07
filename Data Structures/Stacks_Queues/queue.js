class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;

    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;
    // return this;
    // return holdingPointer.value;
    return holdingPointer;
  }
  printQueue() {
    const arr = [];
    let currentNode = this.first;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }
}

const myQueue = new Queue();

console.log(myQueue.peek());
console.log("------------------------------------");
console.log("Adding luffy to the queue...");
console.log(myQueue.enqueue("luffy"));
console.log("Added..");
console.log("------------------------------------");
console.log("Adding zoro to the queue...");
console.log(myQueue.enqueue("zoro"));
console.log("Added..");
console.log("------------------------------------");
console.log("Adding nami to the queue...");
console.log(myQueue.enqueue("nami"));
console.log("Added..");
console.log("------------------------------------");
console.log("Adding usopp  to the queue...");
console.log(myQueue.enqueue("usopp "));
console.log("Added..");
console.log("------------------------------------");
console.log("Adding sanji to the queue...");
console.log(myQueue.enqueue("sanji"));
console.log("Added..");
console.log("------------------------------------");
console.log(myQueue.peek());
console.log("------------------------------------");
console.log(myQueue.dequeue());
console.log("------------------------------------");
console.log(myQueue.printQueue());
