// Udemy video Class constructor
//https://stackoverflow.com/questions/66965864/why-does-this-tail-change-the-property-of-this-head-in-my-linkedlist-class

// 10-->5-->16 

class LinkedList {
  // the constructor is all about setting up that first node
  constructor(value) {
    // we need to keep track of the head 
    this.head = {
      //this is the value that we passed in which 10. (let myLinkedList = new LinkedList(10);)
      value: value,
      //we set the next to null to start
      next: null
    };
    //this just refers to the linked list that we create.
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    //Code here
  }
}

// Im gonna instantiate or run or class LinkedListConstructor and our value is going to be 10
let myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);



// UNCOMMENTED CODE 
// class LinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(value) {
//     //Code here
//   }
// }
