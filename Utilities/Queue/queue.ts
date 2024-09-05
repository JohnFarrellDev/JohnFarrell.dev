interface LinkNode<T> {
  value: T;
  prev?: LinkNode<T>;
  next?: LinkNode<T>;
}

export class Queue<T> {
  tail?: LinkNode<T>;
  head?: LinkNode<T>;
  length: number;

  constructor() {
    this.length = 0;
    this.tail = undefined;
    this.head = undefined;
  }

  enqueue(value: T) {
    const addedNode: LinkNode<T> = {
      value,
    };

    if (!this.head) {
      this.head = addedNode;
      this.length++;
      return;
    }

    if (!this.tail) {
      this.tail = addedNode;
      this.tail.prev = this.head;
      this.head.next = this.tail;
      this.length++;
      return;
    }

    this.tail.next = addedNode;
    addedNode.prev = this.tail;
    this.tail = this.tail.next;
    this.length++;
  }

  enqueueArray(values: T[]) {
    for (let i = 0; i < values.length; i++) {
      const value = values[i];
      this.enqueue(value);
    }
  }

  dequeue(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    const value = this.head.value;

    this.head = this.head.next;
    if (this.head) this.head.prev = undefined;
    if (!this.head?.next) this.tail = undefined;

    this.length--;

    return value;
  }

  empty(): boolean {
    return this.head === undefined;
  }

  peek() {
    return this.head?.value;
  }

  toArray(): T[] {
    const arr: T[] = [];

    let curr = this.head;

    while (curr) {
      arr.push(curr.value);
      curr = curr.next;
    }

    return arr;
  }
}
