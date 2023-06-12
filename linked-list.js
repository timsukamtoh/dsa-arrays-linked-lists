/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const n = new Node(val);

    if (!this.tail) {
      this.head = n;
      this.tail = n;
    } else {
      this.tail.next = n;
      this.tail = n;
    }

    this.length++;
  }

  /** unshift(val): add new value to start of list. */
  unshift(val) {
    const n = new Node(val);

    if (!this.head) {
      this.head = n;
      this.tail = n;
    } else {
      n.next = this.head;
      this.head = n;
    }

    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) {
      return null;
    } else if (this.head === this.tail) {
      let current = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return current.val;
    } else {
      let current = this.head;
      let oldTail = this.tail;
      while (current.next !== this.tail) {
        current = current.next;
      }
      this.tail = current;
      this.length--;
      return oldTail.val;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) {
      return null;
    } else if (this.head === this.tail) {
      let current = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return current.val;
    } else {
      let oldHead = this.head;
      this.head = this.head.next;
      this.length--;
      return oldHead.val;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx > this.length - 1) {
      throw new Error();
    }
    let current = this.head;
    let i = 0;
    while (i < idx) {
      current = current.next;
      i++;
    }
    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx > this.length - 1) {
      throw new Error();
    }
    let current = this.head;
    let i = 0;
    while (i < idx) {
      current = current.next;
      i++;
    }
    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {}

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {}

  /** average(): return an average of all values in the list */

  average() {}
}

module.exports = LinkedList;
