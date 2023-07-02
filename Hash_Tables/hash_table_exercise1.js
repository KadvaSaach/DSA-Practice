class hashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      //   console.log(hash);
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);
    return this.data;
  }
  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keysArray = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        // console.log(this.data[i]);
        // console.log(this.data[i][0]);
        // console.log(this.data[i][0][0]);
        keysArray.push(this.data[i][0][0]);
      }
    }

    return keysArray;
  }
}

const myHashTable = new hashTable(50);
// myHashTable.set('grapes', 10000);
// console.log(myHashTable.get('grapes'));
// console.log("Hash value for grapesss : " + myHashTable._hash("grapesss")); // returns the hashed value(memory spaces)

console.log(
  "-------------------------------------------------------------------------------"
);

console.log("Hash value for grapes : " + myHashTable._hash("grapes"));
console.log();
console.log("Adding grapes to Hash Table ");
console.log(myHashTable.set("grapes", 10));
console.log();
console.log("retriving  apples from Hash Table ");
console.log(myHashTable.get("grapes"));

console.log(
  "-------------------------------------------------------------------------------"
);

console.log("Hash value for apples : " + myHashTable._hash("apples"));
console.log();
console.log("Adding apples to Hash Table ");
console.log(myHashTable.set("apples", 9));
console.log();
console.log("retriving  apples from Hash Table ");
console.log(myHashTable.get("apples"));

console.log(
  "-------------------------------------------------------------------------------"
);

console.log(myHashTable.keys());
