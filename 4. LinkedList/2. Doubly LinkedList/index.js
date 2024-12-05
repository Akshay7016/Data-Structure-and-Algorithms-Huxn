class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  pop() {
    if (!this.head) {
      return "Unable to delete node";
    }

    let temp = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return temp;
    }

    this.tail = this.tail.prev;
    this.tail.next = null;
    temp.prev = null;
    this.length--;

    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {
      return "Unable to delete node";
    }

    let temp = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return temp;
    }

    this.head = this.head.next;
    this.head.prev = null;
    temp.next = null;
    this.length--;

    return temp;
  }
}

const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.push(20);
console.log(myDoublyLinkedList.shift());
console.log(myDoublyLinkedList);
