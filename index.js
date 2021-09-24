// 10-->5-->16 

class LinkedList {
  constructor(value) {
    // we need to keep track of the head 
    this.head = {
      //this is the value that we pass in which 10. (let myLinkedList = new LinkedList(10);)
      value: value,
      next: null
    };
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
