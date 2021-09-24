// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

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

// let myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);

// 10-->5-->16 
class LinkedList {
  constructor(value) {
    this.head = {
      //All you need is value of the property
      // the value will change but the pointer will still point to the same item
      value: 10,
      // and the pointer to the next node 
      next: 5,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    //Code here
  }
}