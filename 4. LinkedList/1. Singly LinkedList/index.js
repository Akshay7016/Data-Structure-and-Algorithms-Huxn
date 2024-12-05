class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
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

    // point previous node to newly created node
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  pop() {
    if (!this.head) {
      return "No head node found";
    }

    let temp = this.head,
      prev = this.head;

    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  shift() {
    if (!this.head) {
      return "No head node found";
    }

    const deletedNode = this.head;
    this.head = this.head.next;
    deletedNode.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return deletedNode;
  }

  getFirst() {
    return this.head;
  }

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

  set(index, value) {
    let temp = this.get(index);
    temp.data = value;

    return temp;
  }

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

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;

    return true;
  }

  size() {
    return this.length;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  print() {
    let temp = this.head;
    let list = "";

    while (temp) {
      list = list + temp.data + " -> ";
      temp = temp.next;
    }

    return list.slice(0, list.length - 3);
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.push(20);
myLinkedList.push(50);
myLinkedList.push(60);
myLinkedList.push(70);
myLinkedList.insert(2, 90);
myLinkedList.push(100);
console.log(myLinkedList.print());
