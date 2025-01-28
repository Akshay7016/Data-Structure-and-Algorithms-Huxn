# Stack Implementation in JavaScript

This project demonstrates a basic implementation of a **Stack** data structure in JavaScript. The implementation uses a linked list approach with a custom `Node` class to manage the elements. Below is the full code and an explanation of each part of the implementation.

## Code

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    this.first = new Node(value);
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.length = 1;
      return;
    }

    newNode.next = this.first;
    this.first = newNode;
    this.length += 1;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    let temp = this.first;
    this.first = this.first.next;

    temp.next = null;
    this.length--;
    return temp;
  }

  top() {
    if (this.length === 0) {
      return undefined;
    }

    return this.first.value;
  }

  view() {
    let temp = this.first;
    while (temp) {
      console.log(temp.value);
      temp = temp.next;
    }
  }
}

const myStack = new Stack(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);

myStack.view();
console.log(myStack.pop());
console.log("After pop");
myStack.view();
console.log("Top value", myStack.top());
```

## Explanation

### Node Class
```javascript
class Node {
  constructor(value) {
    this.value = value; // Stores the value of the node.
    this.next = null;  // Points to the next node in the stack, initially null.
  }
}
```
- The `Node` class is a building block for the stack. Each node stores a value and a pointer to the next node.

### Stack Class

#### Constructor
```javascript
constructor(value) {
  this.first = new Node(value); // Initializes the stack with a single node.
  this.length = 1;             // Sets the initial length of the stack to 1.
}
```
- Creates a stack with the first node containing the given value.

#### Push Method
```javascript
push(value) {
  const newNode = new Node(value); // Create a new node with the given value.

  if (this.length === 0) {         // If the stack is empty, set the new node as the first.
    this.first = newNode;
    this.length = 1;
    return;
  }

  newNode.next = this.first;       // Point the new node to the current first node.
  this.first = newNode;           // Set the new node as the first node.
  this.length += 1;               // Increment the stack length.
}
```
- Adds a new node to the top of the stack.

#### Pop Method
```javascript
pop() {
  if (this.length === 0) {
    return undefined;             // Return undefined if the stack is empty.
  }

  let temp = this.first;          // Temporarily store the first node.
  this.first = this.first.next;   // Set the first node to the next node.

  temp.next = null;               // Remove the reference to the next node.
  this.length--;                  // Decrement the stack length.
  return temp;                    // Return the removed node.
}
```
- Removes and returns the top node of the stack.

#### Top Method
```javascript
top() {
  if (this.length === 0) {
    return undefined;             // Return undefined if the stack is empty.
  }

  return this.first.value;        // Return the value of the first node.
}
```
- Returns the value of the top node without removing it.

#### View Method
```javascript
view() {
  let temp = this.first;
  while (temp) {
    console.log(temp.value);      // Print the value of each node.
    temp = temp.next;             // Move to the next node.
  }
}
```
- Prints all the values in the stack from top to bottom.

### Usage

```javascript
const myStack = new Stack(1); // Initialize the stack with the value 1.
myStack.push(2);              // Add 2 to the stack.
myStack.push(3);              // Add 3 to the stack.
myStack.push(4);              // Add 4 to the stack.

myStack.view();               // View the stack: 4, 3, 2, 1.
console.log(myStack.pop());   // Remove and print the top value: 4.
console.log("After pop");
myStack.view();               // View the stack: 3, 2, 1.
console.log("Top value", myStack.top()); // Print the top value: 3.
```

## Output

```
4
3
2
1
Node { value: 4, next: null }
After pop
3
2
1
Top value 3
```

