const searchByStack = require("../helpers/searchByStack");

/**
 * O(1)
 * Push
 * Pop
 *
 * O(n)
 * Search
 * Access
 */

class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push(value) {
    this.storage [this.count] = value;
    this.count++;
  }

  pop() {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    let result = this.storage [this.count];
    delete this.storage [this.count];
    return result;
  }

  peek() {
    return this.storage [this.count - 1];
  }

  size() {
    return this.count;
  }
}

const stack = new Stack();

stack.push("value1") // Push ~ O(1)
stack.push("value2") // Push ~ O(1)
stack.push("value3") // Push ~ O(1)
stack.push("value4") // Push ~ O(1)

console.log(stack.size()) // 4

stack.pop() // Pop ~ O(1)

console.log(stack.size()) // 3

console.log(stack.peek()) // value3

console.log(searchByStack(stack, 'value1')); // value1 ~ O(n)