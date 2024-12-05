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
      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  reverse() {
    for (let i = 0; i < this.length - 1; i++) {
      let temp = this.head;
      this.head = this.head.next;
      temp.next = this.tail.next;
      this.tail.next = temp;
    }

    this.head = this.tail;
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    this.tail = temp;

    return this;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log(JSON.stringify(myLinkedList.reverse()));
