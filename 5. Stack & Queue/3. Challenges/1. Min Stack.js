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

  min() {
    if (this.length === 0) {
      return undefined;
    }

    if (this.length === 1) {
      return this.first.value;
    }

    let minValue = this.first.value;
    let temp = this.first;

    while (temp) {
      if (temp.value < minValue) {
        minValue = temp.value;
      }

      temp = temp.next;
    }

    return minValue;
  }
}

const myStack = new Stack(1);
myStack.push(2);
myStack.push(-2);
myStack.push(4);

console.log(myStack.min());
