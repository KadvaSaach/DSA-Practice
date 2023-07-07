# Hash Tables

## Advantages

- Better synchronization than other data structures
- Are more efficient than search trees or other data structures
- Constant time for searching, insertion and deletion operations on average
- Space-efficient
- Easy to use.
- Fast lookup: ideal for applications that require quick access to data.
- Efficient insertion and deletion: Hashes are efficient at inserting and deleting elements because they only need to update one array index for each operation. In contrast, linked lists or arrays require shifting elements around when inserting or deleting elements.
- Space efficiency: Hashes use space efficiently because they only store the key-value pairs and the array to hold them. This can be more efficient than other data structures such as trees, which require additional memory to store pointers.
- Flexibility: Hashes can be used to store any type of data, including strings, numbers, and objects. They can also be used for a wide variety of applications, from simple lookups to complex data structures such as databases and caches.
- Collision resolution: Hashes have built-in collision resolution mechanisms to handle cases where two or more keys map to the same array index. This ensures that all elements are stored and retrieved correctly.

## Disadvantages

- inefficient when there are many collisions
- does not allow null values
- have a limited capacity and will eventually fill up
- can be complex to implement
- do not maintain the order of elements, which makes it difficult to retrieve elements in a specific order.

## Real-Time Applications of Hash

- Cache mapping for fast access of the data.
- Password verification.
- Cryptography as a message digest.

## Collision in Hashing

When two or more keys have the same hash value, a collision occurs. We apply collision resolution methods to handle this collision.

#### Techniques

- Separate chaining (open hashing)
- Open addressing (closed hashing)

**Separate chaining:** This method involves making a linked list out of the slot where the collision happened, then adding the new key to the list.

**Open addressing:** To prevent collisions in the hashing table open, addressing is employed as a collision-resolution technique. No key is kept anywhere else besides the hash table. As a result, the hash table’s size is never equal to or less than the number of keys. Additionally known as closed hashing.

### Map() vs Set()

| Map()                      | Set()                       |
| -------------------------- | --------------------------- |
| collection of keyed values | collection of unique values |

#### Map()

`Map` is a collection of keyed data items, just like an `Object`. But the main difference is that Map allows keys of any type.

- `new Map()` – creates the map.
- `map.set(key, value)` – stores the value by the `key`. returns the map itself.
- `map.get(key)` – returns the value by the key, `undefined` if `key` doesn’t exist in map.
- `map.has(key)` – returns `true` if the key exists, `false` otherwise.
- `map.delete(key)` – removes the element (the key/value pair) by the key. returns `true` if `key` existed at the moment of the call, otherwise `false`.
- `map.clear()` – removes everything from the map.
- `map.size` – returns the current element count.

The differences from a regular `Object`:

- Any keys, objects can be keys.
- Additional convenient methods, the `size` property.

#### Set()

A `Set` is a special type collection – “set of values” (without keys), where each value may occur only once.

- `new Set([iterable])` – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
- `set.add(value)` – adds a `value` (does nothing if `value` exists), returns the set itself.
- `set.delete(value)` – removes the value, returns true if value existed at the moment of the call, otherwise false.
- `set.has(value)` – returns `true` if the value exists in the set, otherwise `false`.
- `set.clear()` – removes everything from the set.
- `set.size` – is the elements count.

### Hash Table vs Array

|                  | Search | Lookup | Push\* | Insert | Delete |
| ---------------- | ------ | ------ | ------ | ------ | ------ |
| **_Array_**      | O(n)   | O(1)   | O(1)   | O(n)   | O(n)   |
| **_Hash Table_** | O(1)   | O(1)   |        | O(1)   | O(1)   |
