/**
 * O(1)
 * Push
 * Pop
 *
 * O(n)
 * Searching
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

stack.push("value1"); // Push
stack.push("value2"); // Push
stack.push("value3"); // Push
stack.push("value4"); // Push

console.log(stack.size()) // 4

stack.pop() // Pop

console.log(stack.size()) // 3

console.log(stack.peek()) // value3

