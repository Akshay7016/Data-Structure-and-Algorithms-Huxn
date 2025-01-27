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
