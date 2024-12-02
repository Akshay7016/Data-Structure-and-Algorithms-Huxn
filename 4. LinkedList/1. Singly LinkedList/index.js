class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
};

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
    };

    let temp = this.head, prev = this.head;

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
};

const myLinkedList = new LinkedList(10);
myLinkedList.push(20);
myLinkedList.push(30);
console.log(myLinkedList)
const deletedNode1 = myLinkedList.pop();
const deletedNode2 = myLinkedList.pop();
const deletedNode3 = myLinkedList.pop();
console.log(myLinkedList);
myLinkedList.push(50)
console.log(myLinkedList);

