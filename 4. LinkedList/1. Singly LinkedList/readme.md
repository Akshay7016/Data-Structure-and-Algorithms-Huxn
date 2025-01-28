# LinkedList Implementation in JavaScript

This README provides a detailed explanation of the `LinkedList` implementation written in JavaScript. The code defines a `Node` class to represent individual elements and a `LinkedList` class to manage the linked list.

## Code Breakdown

### Node Class
The `Node` class represents a single element in the linked list.
```javascript
class Node {
  constructor(value) {
    this.data = value; // Stores the value of the node
    this.next = null;  // Pointer to the next node (initially null)
  }
}
```

### LinkedList Class
The `LinkedList` class manages the nodes and provides various utility methods.

#### Constructor
The constructor initializes the linked list with a single node.
```javascript
class LinkedList {
  constructor(value) {
    this.head = new Node(value); // Head of the list
    this.tail = this.head;       // Tail of the list (initially the same as head)
    this.length = 1;            // Length of the list
  }
}
```

#### `push(value)` Method
Adds a new node to the end of the list.
```javascript
push(value) {
  const newNode = new Node(value);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
    this.length++;
    return;
  }

  this.tail.next = newNode; // Link the last node to the new node
  this.tail = newNode;      // Update the tail
  this.length++;
}
```

#### `pop()` Method
Removes the last node from the list and returns it.
```javascript
pop() {
  if (!this.head) {
    return "Unable to delete node";
  }

  let temp = this.head,
      prev = this.head;

  if (this.length === 1) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    return temp;
  }

  while (temp.next) {
    prev = temp;
    temp = temp.next;
  }

  this.tail = prev;        // Update the tail to the second last node
  this.tail.next = null;   // Remove reference to the last node
  this.length--;

  return temp;             // Return the deleted node
}
```

#### `unshift(value)` Method
Adds a new node at the beginning of the list.
```javascript
unshift(value) {
  const newNode = new Node(value);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
    this.length++;
    return;
  }

  newNode.next = this.head; // Point the new node to the current head
  this.head = newNode;      // Update the head
  this.length++;
}
```

#### `shift()` Method
Removes the first node from the list and returns it.
```javascript
shift() {
  if (!this.head) {
    return "No head node found";
  }

  const deletedNode = this.head;

  if (this.length === 1) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    return deletedNode;
  }

  this.head = this.head.next; // Update the head to the next node
  deletedNode.next = null;    // Remove reference to the next node
  this.length--;

  return deletedNode;         // Return the deleted node
}
```

#### `getFirst()` Method
Returns the first node in the list.
```javascript
getFirst() {
  return this.head;
}
```

#### `getLast()` Method
Returns the last node in the list.
```javascript
getLast() {
  if (!this.head) {
    return null;
  }

  let temp = this.head;

  while (temp.next) {
    temp = temp.next;
  }

  return temp;
}
```

#### `get(index)` Method
Retrieves a node at a specific index.
```javascript
get(index) {
  if (index >= this.length || index < 0) {
    return "Invalid index";
  }

  let temp = this.head;
  for (let i = 1; i <= index; i++) {
    temp = temp.next;
  }

  return temp;
}
```

#### `set(index, value)` Method
Updates the value of a node at a specific index.
```javascript
set(index, value) {
  let temp = this.get(index);
  temp.data = value;

  return temp;
}
```

#### `insert(index, value)` Method
Inserts a new node at a specific index.
```javascript
insert(index, value) {
  if (index > this.length || index < 0) {
    return "Invalid index";
  }

  if (index === 0) {
    return this.unshift(value);
  }

  if (index === this.length) {
    return this.push(value);
  }

  let newNode = new Node(value);
  let temp = this.get(index - 1);

  newNode.next = temp.next; // Point the new node to the next node
  temp.next = newNode;      // Point the previous node to the new node
  this.length++;

  return true;
}
```

#### `size()` Method
Returns the number of nodes in the list.
```javascript
size() {
  return this.length;
}
```

#### `clear()` Method
Clears the entire linked list.
```javascript
clear() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}
```

#### `print()` Method
Prints the linked list as a string.
```javascript
print() {
  let temp = this.head;
  let list = "";

  while (temp) {
    list = list + temp.data + " -> ";
    temp = temp.next;
  }

  return list.slice(0, list.length - 3); // Remove trailing arrow
}
```

## Example Usage
Here is an example of how to use the `LinkedList` class:
```javascript
const myLinkedList = new LinkedList(10);
myLinkedList.push(20);
console.log(myLinkedList.shift());
console.log(myLinkedList);
console.log(myLinkedList.shift());
console.log(myLinkedList);
```

### Output
```plaintext
Node { data: 10, next: null }
LinkedList { head: Node { data: 20, next: null }, tail: Node { data: 20, next: null }, length: 1 }
Node { data: 20, next: null }
LinkedList { head: null, tail: null, length: 0 }
```

---

This implementation provides a basic linked list with essential operations, suitable for learning and small-scale applications.

