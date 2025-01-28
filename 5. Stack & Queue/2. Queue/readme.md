# Queue Implementation in JavaScript

This document provides a comprehensive explanation of the Queue implementation in JavaScript, including a detailed breakdown of the code and its functionality.

## Code

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
      this.length++;
      return;
    }

    this.last.next = newNode;
    this.last = newNode;
    this.length++;
    return this.length;
  }

  dequeue() {
    if (this.length === 0) {
      return undefined;
    }

    if (this.length === 1) {
      this.first = null;
      this.last = null;
      this.length = 0;
      return;
    }

    let temp = this.first;
    this.first = this.first.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}

const myQueue = new Queue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue);
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue);
```

## Line-by-Line Explanation

### **Node Class**
- **`class Node`**: Represents a single node in the queue.
- **`constructor(value)`**:
  - Accepts a `value` to initialize the node.
  - Sets the `value` property to the input value.
  - Initializes the `next` property as `null`, indicating no connection to another node.

### **Queue Class**
- **`class Queue`**: Implements a queue using a linked list.

#### Constructor
- **`constructor(value)`**:
  - Accepts a `value` to initialize the queue with the first node.
  - Creates a new `Node` using the provided value.
  - Sets `this.first` and `this.last` to point to the newly created node.
  - Initializes the `length` of the queue to `1`.

#### Enqueue Method
- **`enqueue(value)`**:
  - Creates a new `Node` with the provided value.
  - If the queue is empty (length is `0`):
    - Sets both `first` and `last` to the new node.
    - Increments the `length`.
  - If the queue is not empty:
    - Sets the `next` property of the current `last` node to the new node.
    - Updates the `last` pointer to the new node.
    - Increments the `length`.
  - Returns the updated `length` of the queue.

#### Dequeue Method
- **`dequeue()`**:
  - If the queue is empty (length is `0`):
    - Returns `undefined`.
  - If the queue has only one node (length is `1`):
    - Sets both `first` and `last` to `null`.
    - Resets the `length` to `0`.
    - Exits the method.
  - If the queue has more than one node:
    - Stores the current `first` node in a temporary variable `temp`.
    - Updates the `first` pointer to the next node.
    - Disconnects the `temp` node by setting its `next` property to `null`.
    - Decrements the `length`.
    - Returns the removed node (`temp`).

### **Usage**
- **`const myQueue = new Queue(1);`**: Creates a queue with an initial value of `1`.
- **`myQueue.enqueue(2);`**: Adds a new node with the value `2` to the queue.
- **`myQueue.enqueue(3);`**: Adds another node with the value `3`.
- **`console.log(myQueue);`**: Logs the current state of the queue.
- **`myQueue.dequeue();`**: Removes the first node (`1`) from the queue.
- **`myQueue.dequeue();`**: Removes the next node (`2`) from the queue.
- **`console.log(myQueue);`**: Logs the updated state of the queue.

## Example Output

### Initial State
```
Queue {
  first: Node { value: 1, next: Node { value: 2, next: [Node] } },
  last: Node { value: 3, next: null },
  length: 3
}
```

### After Two Dequeue Operations
```
Queue {
  first: Node { value: 3, next: null },
  last: Node { value: 3, next: null },
  length: 1
}
```

