class linkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    const newNode = {
      value: value,
      next: null,
    };

    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

const objLinkedList = new linkedList(10);
// console.log(objLinkedList);
console.log(objLinkedList.append(1));
console.log(objLinkedList.append(2));
console.log(objLinkedList.append(3));
console.log(objLinkedList.prepend(0));
console.log("----------------------------------------------------------------");
console.log(objLinkedList.printList());
console.log("----------------------------------------------------------------");
console.log(objLinkedList.insert(2, 99));
console.log(objLinkedList.insert(20, 88));
console.log("----------------------------------------------------------------");
console.log(objLinkedList.printList());
console.log(objLinkedList.remove(2));
console.log("----------------------------------------------------------------");
console.log(objLinkedList.printList());
console.log(objLinkedList.remove(3));
console.log("----------------------------------------------------------------");
console.log("----------------------------------------------------------------");
console.log("----------------------------------------------------------------");
console.log(objLinkedList.reverse());

